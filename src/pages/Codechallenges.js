import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Codechallenges.css';


function CodeChallenges() {
  return (
    <div>
    <Header />
    <ListCodeChallengs />
    </div>
    );
  }



  function ListCodeChallengs () {
    return (
      <div className='container'>

        <div className='list-challenges'>

          <div className='list-challenges-title'>From CodingTrain: </div>

          <div className='list-challenges-item'>
            <Link id= 'linkstyle' to="/rain"> rain drops with p5js</Link>
          </div>

        </div>
      </div>

      )
    }



    export default CodeChallenges
