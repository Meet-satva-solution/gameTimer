import { useState, useRef } from "react";

export default function Player() {
  const enteredPlayerName = useRef();
  const [playerName, setPlayerName] = useState() 
  const handleClick = () => {
    setPlayerName(enteredPlayerName.current.value)
  }
  return (
    <section id="player" >
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={enteredPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
