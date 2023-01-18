import { FC, useState, useEffect } from "react";

interface ITimeline {
  duration: number | null;
  // use-sound lib doesn't typehint sound, so best to turn off eslint
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sound?: any;
}

interface SongTime {
  min: string;
  sec: string;
}

const Timeline: FC<ITimeline> = ({ duration, sound }) => {
  const [time, setTime] = useState<SongTime>({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState<SongTime>({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState(0);

  const formatDuration = (duration: number): string => {
    return duration < 10 ? "0" + duration : duration.toString();
  };

  // Set song duration
  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const remainingSec = Math.floor(sec % 60);
      setTime({
        min: formatDuration(min),
        sec: formatDuration(remainingSec),
      });
    }
  }, [sound]);

  // Update current time while playing
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const seek = sound.seek();
        setSeconds(seek);
        const min = Math.floor(seek / 60);
        const sec = Math.floor(seek % 60);
        setCurrTime({
          min: formatDuration(min),
          sec: formatDuration(sec),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div className="flex flex-col pt-3">
      <div className="flex justify-between items-center text-gray-200">
        <p>
          {currTime.min}:{currTime.sec}
        </p>
        <p>
          {time.min}:{time.sec}
        </p>
      </div>
      {duration && (
        <input
          type="range"
          min="0"
          max={duration / 1000}
          value={seconds}
          onChange={(e) => sound.seek(e.target.value)}
          className="w-full h-2 mt-2 rounded-xl appearance-none cursor-pointer bg-purple-100"
        />
      )}
    </div>
  );
};

export default Timeline;
