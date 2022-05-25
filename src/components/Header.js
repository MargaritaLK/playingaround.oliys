import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
      <Home />
      <About/>
      <CodeChallenges />
    </div>
  )
}

function Home() {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/">home</Link>
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
