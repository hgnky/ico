import React from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import EclairConnectBlack from './../../assets/img/eclair_black.png';

class PresaleCard extends React.Component<any, any> {
  render() {
    return (
      <div className='col mb-5'>
        <div className='card h-80 radius'>
          <div className='badge bg-dark text-white position-absolute'>
            {this.props.round}
          </div>
          <span className='token_pack'>
            1,000,000,000
            <span className='vital_token'></span>
          </span>
          <span className='supply'>Supply {this.props.supply}</span>
          <div className='card-body p-4'>
            <div className='text-center'>
              <span className='minus'>
                <i className='fa fa-minus'></i>
              </span>
              <span className='amount'>1</span>
              <span className='plus'>
                {console.log(this.props.count)}
                <i className='fa fa-plus'></i>
              </span>
            </div>
          </div>
          <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
            <div className='text-center'>
              {this.props.isLogged ? (
                <Link
                  to={routeNames.unlock}
                  className='btn connect mt-3'
                  data-testid='loginBtn'
                >
                  <span>Buy {this.props.egldprice}</span>
                </Link>
              ) : (
                <Link
                  to={routeNames.unlock}
                  className='btn connect mt-3'
                  data-testid='loginBtn'
                >
                  <span>Connect</span>
                </Link>
              )}
            </div>
          </div>
          <p className='supply'>
            1 VITAL = {this.props.vitalprice}
            <br />
            {this.props.egldprice} for 1,000,000,000 VITAL
          </p>
        </div>
      </div>
    );
  }
}

export default PresaleCard;
