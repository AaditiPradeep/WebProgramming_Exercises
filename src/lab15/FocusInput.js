import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <div>
      <h2>Focus Input Field</h2>
      <input ref={inputRef} type="text" placeholder="Enter something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
