
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Circlingaround.css';
import Sketch from './CirclingaroundSketch'



function Circlingaround() {
  return (
    <div>
      <div className='header-nutral'>
        <Header />
      </div>

        <div className='circlingaround-sketch-container'>
          <Sketch />
      </div>


    <Footer />
    </div>
  );
}



export default Circlingaround
