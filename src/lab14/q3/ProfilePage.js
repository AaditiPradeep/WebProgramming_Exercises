import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

function ProfilePage({ userData }) {
  return (
    <div className="profile-page" style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <ProfileImage imageUrl={userData.profileImage} />
        <UserInfo 
          name={userData.name} 
          email={userData.email} 
          bio={userData.bio} 
        />
      </div>
      <hr style={{ margin: '20px 0' }} />
      <UserPosts posts={userData.posts} />
    </div>
  );
}

export default ProfilePage;