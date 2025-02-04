import React from 'react';
import Greeting from './Greeting';
import UserProfileCard from './UserProfileCard';
import StyledComponent from './StyledComponent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Greeting name="Patel" />
      <Greeting />
      <UserProfileCard
        name="Milap Narola"
        age={25}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        location="New York, USA"
        profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1D4tKrOaZubAhJ0jwkqFzo9R-p9kTiV6xDw&s"
      />
      <StyledComponent isStyled={true} />
      <StyledComponent isStyled={false} />
    </div>
  );
};

export default App;
