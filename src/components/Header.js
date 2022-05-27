import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
      <Home />
      <About/>
      <Scheiding />
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

function Scheiding() {
  return (
    <div className='header-item'>|</div>
  )
}



function About() {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/about">about</Link>
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
