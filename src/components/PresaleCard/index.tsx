import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import EclairConnectBlack from './../../assets/img/eclair_black.png';

function PresaleCard(props: any) {
  const [amount, setAmount] = useState(1);
  return (
    <div className='col mb-5'>
      <div className='card h-100 radius'>
        <div className='badge bg-dark text-white position-absolute'>
          {props.round}
        </div>
        <span className='token_pack'>
          {(1000000000 * amount).toLocaleString()}
          <span className='vital_token'></span>
        </span>
        <span className='supply'>Supply {props.supply}</span>
        <div className='card-body p-4'>
          <div className='text-center'>
            <span
              className='minus'
              onClick={() => {
                if (amount > 1) setAmount(amount - 1);
              }}
            >
              <i className='fa fa-minus'></i>
            </span>
            <span className='amount'>{amount}</span>
            <span
              className='plus'
              onClick={() => {
                if (amount < 20) setAmount(amount + 1);
              }}
            >
              <i className='fa fa-plus'></i>
            </span>
          </div>
        </div>
        <div className='card-footer pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            {props.isLogged && props.transaction ? (
              <span
                className='btn connect mt-3'
                data-testid='loginBtn'
                onClick={() => {
                  props.transaction(
                    (props.egldprice * amount * Math.pow(10, 18)).toString()
                  );
                }}
              >
                Buy for {props.egldprice * amount} eGLD
              </span>
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
          1 VITAL = {props.vitalprice}
          <br />
          {props.egldprice} for 1,000,000,000 VITAL
        </p>
      </div>
    </div>
  );
}

export default PresaleCard;
