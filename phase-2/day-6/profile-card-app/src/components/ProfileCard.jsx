import { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ 
  name = 'Anshul Singh', 
  college = 'SISTec', 
  exam = 'JEE', 
  imageUrl = 'https://via.placeholder.com/100?text=Student' 
}) {
  const [language, setLanguage] = useState('English');

  const labels = language === 'Hindi'
    ? { college: 'कॉलेज', exam: 'परीक्षा के लिए तैयारी', toggle: 'English' }
    : { college: 'College', exam: 'Preparing for', toggle: 'Hindi' };

  const handleToggleLanguage = () => {
    setLanguage(language === 'English' ? 'Hindi' : 'English');
  };

  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
      <div className="profile-content">
        <h2 className="profile-name">{name}</h2>
        <p><strong>{labels.college}:</strong> {college}</p>
        <p><strong>{labels.exam}:</strong> {exam}</p>
        <button className="toggle-button" onClick={handleToggleLanguage}>
          Switch to {labels.toggle}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;