
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Perlinnoiseflow.css';



function Perlinnoiseflow() {
  return (
    <div>
      <Header />
      <PerlinnoiseflowContent />
      <Footer />
    </div>
  );
}


function PerlinnoiseflowContent() {
  return (
    <div className='content-container '>

      <div className='collection-perlinnoiseflow'>

        <div className='collection-perlinnoiseflow-item'>
          <div className='perlinnoiseflow-image' id='imageflow1'></div>
        </div>

        <div className='collection-perlinnoiseflow-item'>
          <div className='perlinnoiseflow-image' id='imageflow2'></div>
        </div>

        <div className='collection-perlinnoiseflow-item'>
          <div className='perlinnoiseflow-image' id='imageflow3'></div>
        </div>

        <div className='collection-perlinnoiseflow-item'>
          <div className='perlinnoiseflow-image' id='imageflow4'></div>
        </div>

        <div className='collection-dummy-item'>
        </div>


      </div>
    </div>
  )
}


export default Perlinnoiseflow
