import React, { useEffect, useState } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke.');
    }
  };

  useEffect(() => {
    fetchJoke(); // Fetch joke on mount
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default JokeFetcher;
