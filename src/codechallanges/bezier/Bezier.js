
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Bezier.css'




function Bezier() {
  return (
    <div>
      <Header />
      <BezierContent/>
      <Footer />
    </div>
  )
}



function BezierContent() {
  return (

    <div className='content-container'>

      <div className='collection-bezier'>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez1'></div>
        </div>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez2'></div>
        </div>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez3'></div>
        </div>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez4'></div>
        </div>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez5'></div>
        </div>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez6'></div>
        </div>

        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez7'></div>
        </div>


        <div className='collection-bezier-item'>
          <div className='bezier-image' id='bez8'></div>
        </div>

        <div className='collection-dummy-item'>
        </div>



      </div>


    </div>

    )
}




export default Bezier
