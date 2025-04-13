// Content.js
import { useState } from 'react';

function Content() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you get when you cross a snowman with a vampire? Frostbite."
  ];
  
  const [joke, setJoke] = useState("");

  const handleClick = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Random Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default Content;
