import { FC } from "react";
import Player from "./components/Player";

const App: FC = () => {
  return (
    <div className="grid place-items-center h-full">
      <Player />
    </div>
  );
};

export default App;
