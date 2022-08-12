import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Codechallenges.css';
import '../components/CollectionView.css'
import '../components/Maincontainers.css'


function CodeChallenges() {
  return (
    <div>
    <Header />
    <ListCodeChallengs />
    <Footer />
    </div>
    );
  }



  function ListCodeChallengs () {
    return (
      <div className='content-container'>

        <div className='list-challenges'>

          {/* <div className='list-challenges-title'>My versions of the code challanges from&nbsp;
            <a id='linkstyle-italic' href="https://thecodingtrain.com/" target="_blank">thecodingtrain.com</a> by the great
            <a id='linkstyle-italic' href="https://twitter.com/shiffman/" target="_blank"> @shiffman. </a> </div>
 */}

          <div className='collection-thumernails'>



            <Link to="./bezier">
              <div className='collection-thumernails-item'>
                <div className='bezier-image'></div>
              </div>
            </Link>



            <Link to="./soundcircle">
              <div className='collection-thumernails-item'>
                <div className='soundcircle-image'></div>
              </div>
            </Link>


            <Link to="./circlingaround">
              <div className='collection-thumernails-item'>
                <div className='circlingaround-image'></div>
              </div>
            </Link>


            <Link to="./perlinnoiseflow">
              <div className='collection-thumernails-item'>
                <div className='perlinnoiseflow-image'></div>
              </div>
            </Link>


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







          </div>





        </div>
      </div>

      )
    }



    export default CodeChallenges
