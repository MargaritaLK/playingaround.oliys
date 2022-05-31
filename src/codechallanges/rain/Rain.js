
import Header from '../../components/Header';
import './Rain.css';
import Sketch from './RainSketch'

import '../../components/CalmSketchBG.css';


function Rain() {
  return (
    <div>
      <div className='header-nutral'>
        <Header />
      </div>

      <div className='calm-sketch-background'>
        <div className='rain-sketch-container'>
          <Sketch />
        </div>
      </div>



    </div>
  );
}



export default Rain
