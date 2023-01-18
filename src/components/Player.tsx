import { FC, useState } from "react";
import { useSound } from "use-sound";
import ButtonGroup from "./ButtonGroup";
import SongTitle from "./SongTitle";
import Timeline from "./Timeline";
import VolumeControl from "./VolumeControl";
import OnMyWay from "../assets/music/On-My-Way-Lofi-Study-Music.mp3";

const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(OnMyWay);

  const playingButtonHandler = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      return;
    }
    play();
    setIsPlaying(true);
  };

  return (
    <div className="py-8 px-16 rounded-lg bg-dark-200">
      <h2 className="text-gray-100 text-2xl font-bold text-center mb-4">
        Now playing
      </h2>
      <img
        src="https://picsum.photos/200/200"
        alt="album art"
        className="rounded-lg"
      />
      <SongTitle name="On My Way" composer="Ghostrifter" />
      <ButtonGroup isPlaying={isPlaying} playPause={playingButtonHandler} />
      <Timeline duration={duration} sound={sound} />
      <VolumeControl sound={sound} />
    </div>
  );
};

export default Player;
