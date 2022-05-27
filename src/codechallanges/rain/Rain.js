
import Header from '../../components/Header';
import CalmBG from '../../components/CalmBG';
import './Rain.css';
import Sketch from './RainSketch'



function Rain() {
  return (
    <div>
      <div className='header-nutral'>
        <Header />
      </div>

      <div className='calm-brackground'>
        <Sketch />
      </div>

    </div>
  );
}



export default Rain
