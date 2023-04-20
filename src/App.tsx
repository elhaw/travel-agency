import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https:www.api.com/stories", {
      method: "post",
    })
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xln underline text-mintgreen font-Montserrat font-normal">
        Hello worl
      </h1>
    </div>
  );
}

export default App;
