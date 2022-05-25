
import Header from '../../components/Header';
import CalmBG from '../../components/CalmBG';
import './Rain.css';
import { ReactP5Wrapper } from "react-p5-wrapper";
import RainSketch from './RainSketch'



function Rain() {
  return (
    <div>
      <Header />
      <div className='calm-brackground'>
        <ReactP5Wrapper sketch={RainSketch} />
      </div>

    </div>
  );
}



export default Rain
