import { FaUserCircle } from 'react-icons/fa';
import '../styles/pages.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="page main-page">
      <div className="shodow-layer content-inner-main">
        <h1>Hello!</h1>
        <div className='content-inner-main-descripition'>My name is <span className='title'>Ilya Tovbin</span>, and I'm a Frontend web developer</div>
        <div className='learn-more pointer'>
          <Link to="/about">
            <FaUserCircle /> Learn more about me
          </Link>
          </div>
      </div>
    </div>
  )
}

export default Main;