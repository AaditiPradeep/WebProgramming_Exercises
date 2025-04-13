import React from 'react';

function UserInfo({ name, email, bio }) {
  return (
    <div className="user-info" style={{ margin: '20px 0' }}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <div>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default UserInfo;