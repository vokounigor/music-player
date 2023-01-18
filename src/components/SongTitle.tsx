import { FC } from "react";

interface ISongTitle {
  name: string;
  composer: string;
}

const SongTitle: FC<ISongTitle> = ({ name, composer }) => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-100 py-4">
      <h3 className="font-extrabold text-xl">{name}</h3>
      <h4 className="font-medium text-base">{composer}</h4>
    </div>
  );
};

export default SongTitle;
