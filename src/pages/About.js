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
    <div>
      <div className='info'>.oliys.</div>
    <div className='abouttext'>
      This webpages will be a
      collection of my tests with visuals, playing around, code challenges..
        <div className='info'> twitter:
          <a id='linkstyle-italic' href="https://twitter.com/oliysart" target="_blank">@oliysart</a>
        </div>


    </div>
    </div>

  )
}


export default About
