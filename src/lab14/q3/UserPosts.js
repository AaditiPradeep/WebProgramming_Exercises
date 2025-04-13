import React from 'react';

function UserPosts({ posts }) {
  return (
    <div className="user-posts">
      <h3>User Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {posts.map((post, index) => (
            <li key={index} style={{ 
              margin: '10px 0', 
              padding: '15px', 
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <small>Posted on: {post.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserPosts;