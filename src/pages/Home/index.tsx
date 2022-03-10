import * as React from 'react';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import PresaleCard from '../../components/PresaleCard';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className='d-flex flex-fill container'>
            <div className='row presentation-block'>
              <div className='col-12 col-12-title'>
                <h1>
                  <span className='vital_token'></span> VITAL ICO
                </h1>
                <p>
                  Initial Coin Offering (ICO) VITAL
                  <br />
                  Supply 10,000,000,000,000
                </p>
                <p>Remaining supply</p>
                <span className='token_remain'>
                  8,568,000,000,000
                  <span className='vital_token'></span>
                </span>
                <div className='progress'>
                  <div
                    className='progress-bar progress-round progress-bar-striped progress-bar-animated'
                    role='progressbar'
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    30%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <PresaleCard supply='1000' />
              <PresaleCard />
              <PresaleCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
