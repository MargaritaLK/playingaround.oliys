
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import CalmBG from '../../components/CalmBG';
import './Dragforce.css';
import Sketch from './DragforceSketch'



function Dragforce() {
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



export default Dragforce
