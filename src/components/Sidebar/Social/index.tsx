import { FaGithub, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import './Social.css'

export default function Social() {
  return (
    <div className="social-container">
      <FaGithub className='pointer' size={25} />
      <FaLinkedin className='pointer' size={25} />
      <FaFacebookF className='pointer' size={25} />
    </div>
  )
}