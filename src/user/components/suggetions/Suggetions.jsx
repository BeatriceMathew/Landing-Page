import React from 'react'
import Styles from './Suggetions.module.scss'

const Suggestions = ({ suggestions }) => {
  return (
    <div className={Styles.suggestionsContainer}>
      <h3>Suggestions</h3>
      {suggestions.map(suggestion => (
        <div key={suggestion.id} className={Styles.suggestion}>
          <img className={Styles.suggestionProfilePic} src={suggestion.profilePic} alt="Profile" />
          <span className={Styles.suggestionUsername}>{suggestion.username}</span>
          <span className={Styles.suggestionFollowers}>{suggestion.followers} Followers</span>
          
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
