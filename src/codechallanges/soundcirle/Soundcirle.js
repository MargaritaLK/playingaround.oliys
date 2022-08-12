
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Soundcircle.css'




function Soundcircle() {
  return (
    <div>
      <Header />
      <SoundcircleContent />
      <Footer />
    </div>
  )
}



function SoundcircleContent() {
  return (

    <div className='content-container'>

      <div className='collection-soundcircle'>

        <div className='collection-soundcircle-item'>
          <div className='soundcircle-image' id='sc1'></div>
        </div>


        <div className='collection-soundcircle-item'>
          <div className='soundcircle-image' id='sc2'></div>
        </div>


        <div className='collection-soundcircle-item'>
          <div className='soundcircle-image' id='sc3'></div>
        </div>



        <div className='collection-soundcircle-item'>
          <div className='soundcircle-image' id='sc4'></div>
        </div>

        <div className='collection-dummy-item'>
        </div>



      </div>


    </div>

  )
}




export default Soundcircle
