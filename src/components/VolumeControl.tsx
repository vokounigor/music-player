import { ChangeEvent, FC, useState } from "react";
import { IconContext } from "react-icons";
import { BiVolumeFull, BiVolume, BiVolumeMute } from "react-icons/bi";

interface IVolumeControl {
  // use-sound lib doesn't typehint sound, so best to turn off eslint
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sound?: any;
}

const VolumeControl: FC<IVolumeControl> = ({ sound }) => {
  const [volume, setVolume] = useState(1);

  const mute = () => {
    if (volume > 0) {
      setVolume(0);
      sound.volume(0);
      return;
    }
    setVolume(1);
    sound.volume(1);
  };

  const volumeButton = () => {
    if (volume < 0.1) {
      return <BiVolumeMute />;
    }
    if (volume < 0.5) {
      return <BiVolume />;
    }
    return <BiVolumeFull />;
  };

  const volumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    setVolume(volume);
    sound.volume(volume);
  };

  return (
    <div className="relative mt-6 flex justify-center">
      <IconContext.Provider value={{ size: "2em", color: "#bb86fc" }}>
        <button className="peer" onClick={mute}>
          {volumeButton()}
        </button>
      </IconContext.Provider>
      <div className="hidden w-[200px] top-8 peer-hover:flex hover:flex absolute">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={volumeChange}
          className="w-full h-2 mt-2 rounded-xl appearance-none cursor-pointer bg-purple-100"
        />
      </div>
    </div>
  );
};

export default VolumeControl;
