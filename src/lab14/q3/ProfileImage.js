import React from 'react';

function ProfileImage({ imageUrl }) {
  return (
    <div className="profile-image">
      <img 
        src={imageUrl} 
        alt="User profile" 
        style={{ 
          width: '150px', 
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #ddd'
        }}
      />
    </div>
  );
}

export default ProfileImage;