// FormUseState.js
import React, { useState } from 'react';

function FormUseState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default FormUseState;
