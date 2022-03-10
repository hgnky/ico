import React from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';

class PresaleCard extends React.Component {
  render() {
    return (
      <div className='col mb-5'>
        <div className='card h-80 radius'>
          <div className='badge bg-dark text-white position-absolute'>
            Round 1
          </div>
          <span className='token_pack'>
            1,000,000,000
            <span className='vital_token'></span>
          </span>
          <span className='supply'>Supply 3,334,000,000,000</span>
          <div className='card-body p-4'>
            <div className='text-center'>
              <span className='minus'>
                <i className='fa fa-minus'></i>
              </span>
              <span className='amount'>1</span>
              <span className='plus'>
                <i className='fa fa-plus'></i>
              </span>
            </div>
          </div>
          <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
            <div className='text-center'>
              <a className='btn mt-auto' href='#'>
                Buy 0.75 EGLD
              </a>
            </div>
          </div>
          <p>
            1 VITAL = 0.00000000075 EGLD
            <br />
            0.75 EGLD for 1,000,000,000 VITAL
          </p>
        </div>
      </div>
    );
  }
}

export default PresaleCard;
