import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  
  const 클릭했을때_실행할함수 = () => setLike((prev) => !prev);

  const 좋아요또는취소버튼 = like? (
    <button onClick={클릭했을때_실행할함수}>👋</button>
  ) : (
    <button onClick={클릭했을때_실행할함수}>👍</button>
  );

  return (
    <div>
      <h1>👍/👎</h1>
      {좋아요또는취소버튼}
    </div>
  );
}

export default App;
