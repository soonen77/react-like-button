import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);

  const like반전 = () => setLike((현재like) => !현재like);

  let thumbs = <button onClick={like반전}>👍</button>;
  if (like === true) {
    thumbs = <button onClick={like반전}>👋</button>;
  }

  return (
    <div>
      <h1>좋아요 버튼</h1>
      {thumbs}
    </div>
  );
}

export default App;
