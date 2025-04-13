import React from 'react';
import ProfilePage from './lab14/q3/ProfilePage';
import NovelServicesLogin from './lab14/q2';
import ImageDisplay from './lab14/q1'

function Lab14() {
  const userData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Frontend Developer | React Enthusiast',
    profileImage: require('./lab14/q3/man.png'),
    posts: [
      {title:"Getting Started with React",
      content:"React is a JavaScript library used for building user interfaces..",
      date:"2025-01-15"}
    ]
  };

  return (
    <div className="App">
      <ImageDisplay/>
      <br/><br/>
      <NovelServicesLogin/> 
      <br/><br/>
      <h1 style={{textAlign:"center"}}> User Profile </h1>
      <ProfilePage userData={userData} />
    </div>
  );
}

export default Lab14;
