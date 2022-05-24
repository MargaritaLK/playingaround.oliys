import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
      <About/>
      <CodeChallenges />
    </div>
  )
}

function About() {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/">about</Link>
    </div>
  )
}




function CodeChallenges () {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/codechallenges">code challenges</Link>
    </div>
  )
}






export default Header;
