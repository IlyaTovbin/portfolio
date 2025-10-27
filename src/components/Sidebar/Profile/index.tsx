import profileImage from '../../../assets/images/ilya.jpg';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-name">Ilya Tovbin</div>
      <div className="profile-title">Frontend Developer</div>
    </div>
  )
}