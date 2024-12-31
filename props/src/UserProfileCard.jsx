import React, { useState } from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleFollow = () => setIsFollowing(!isFollowing);
  const toggleBio = () => setShowFullBio(!showFullBio);

  return (
    <div className="user-profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <div className="bio">
        <p>{showFullBio ? bio : `${bio.substring(0, 100)}...`}</p>
        {bio.length > 100 && (
          <button onClick={toggleBio}>
            {showFullBio ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      <button className={`follow-button ${isFollowing ? 'following' : ''}`} onClick={toggleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserProfileCard;
