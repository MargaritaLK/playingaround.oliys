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

          <div className='list-challenges-title'>my versions of the code challanges from &nbsp;
            <a id='linkstyle-italic' href="https://thecodingtrain.com/" target="_blank">thecodingtrain.com</a> by the great
            <a id='linkstyle-italic' href="https://twitter.com/shiffman/" target="_blank"> @shiffman </a> </div>


          <div className='list-challenges-item'>
            <Link id='linkstyle' to="./dragforce"> - dragforce</Link>
          </div>

          <div className='list-challenges-item'>
            <Link id='linkstyle' to="./radiusflow"> - radius flow</Link>
          </div>


          <div className='list-challenges-item'>
            <Link id='linkstyle' to="./circlingaround"> - circling  around</Link>
          </div>




        </div>
      </div>

      )
    }



    export default CodeChallenges
