import { FaStar } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <div className="about-showdow-layer">
          <div className="about-banner-image"></div>
        </div>
      </div>
      <div className="about-description">
        <h2>About Me</h2>
        <p>My name is Ilya Tovbin, I’m a Fullstack Web Developer currently working as a freelancer, I specialize in transforming beautiful designs into full-fledged interactive web applications for various clients all around the world.</p>
        <p>My job involves doing what I love, developing new websites and web applications. I absolutely love learning new things and taking on new challenges. A more detailed look at my professional capabilities and experience is available in my English or Hebrew resume.</p>
        <div className="about-quot">"Creativity Is Intelligence Having Fun."  <i>Albert Einstein</i></div>
        <div className="about-rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  )
}

export default About;