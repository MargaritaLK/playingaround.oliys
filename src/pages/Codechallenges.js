import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Codechallenges.css';
import '../components/CollectionView.css'


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


          <div className='collection-thumernails'>




              <Link to="./dragforce">
              <div className='collection-thumernails-item'>
                <div className='dragforce-image'></div>
              </div>
              </Link>



            <Link to="./radiusflow">
              <div className='collection-thumernails-item'>
                <div className='radiusflow-image'></div>
              </div>
            </Link>


            <Link to="./circlingaround">
              <div className='collection-thumernails-item'>
                <div className='circlingaround-image'></div>
              </div>
            </Link>





          </div>





        </div>
      </div>

      )
    }



    export default CodeChallenges
