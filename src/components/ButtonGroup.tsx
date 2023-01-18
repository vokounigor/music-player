import { FC } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

interface IButtonGroup {
  isPlaying: boolean;
  playPause: () => void;
  nextTrack?: () => void;
  prevTrack?: () => void;
}

const ButtonGroup: FC<IButtonGroup> = ({
  isPlaying,
  playPause,
  nextTrack,
  prevTrack,
}) => {
  return (
    <div className="flex px-2 justify-evenly">
      <IconContext.Provider value={{ size: "3em", color: "#bb86fc" }}>
        <button onClick={prevTrack}>
          <BiSkipPrevious />
        </button>
        <button onClick={playPause}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button onClick={nextTrack}>
          <BiSkipNext />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default ButtonGroup;
