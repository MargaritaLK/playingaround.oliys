import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Radiusflow.css';
import Sketch from './RadiusflowSketch'



function Radiusflow() {
  return (
    <div>
      <div className='header-nutral'>
        <Header />
      </div>

      <div className='calm-sketch-background'>
        <div className='dragforce-sketch-container'>
          <Sketch />
        </div>
      </div>


    <Footer />

    </div>
  );
}



export default Radiusflow
