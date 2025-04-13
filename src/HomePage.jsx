import React from 'react';

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lab Exercises</h1>
      <ul>
        {[...Array(12)].map((_, i) => (
          <li key={i}>
            <a href={`./labs/lab${i + 1}/index.html`} target="_blank" rel="noopener noreferrer">
              Lab {i + 1}
            </a>
          </li>
        ))}
        <li><a href="/lab13" target="_blank">Lab 13 (React)</a></li>
        <li><a href="/lab14" target="_blank">Lab 14 (React)</a></li>
        <li><a href="/lab15" target="_blank">Lab 15 (React)</a></li>
      </ul>
    </div>
  );
};

export default HomePage;
