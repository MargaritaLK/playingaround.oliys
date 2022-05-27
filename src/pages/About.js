import Header from '../components/Header'
import './About.css'


function About() {
  return (
    <div>
      <Header />
      <div className='container'>
        <AboutText />
      </div>

    </div>
  )
}


function AboutText() {
  return (
    <div className='abouttext'>
      <div>.oliys.</div>
      This webpages is a
      collection of my tests with visuals, playing around, code challenges...

    </div>
  )
}


export default About
