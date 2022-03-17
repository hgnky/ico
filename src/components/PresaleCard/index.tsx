import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';
import EclairConnectBlack from './../../assets/img/eclair_black.png';
import { BsFillLightningChargeFill } from 'react-icons/bs';
function PresaleCard(props: any) {
  const [amount, setAmount] = useState(1);
  const [showMaxPerTransactionWarning, setShowMaxPerTransactionWarning] =
    useState(false);
  return (
    <div className='col mb-5' style={{ opacity: props.isActive ? 1 : 0.5 }}>
      <div className='card h-100 radius'>
        <div className='badge bg-dark text-white position-absolute'>
          {props.round}
        </div>
        <span className='token_pack'>
          {(1000000000 * amount).toLocaleString()}
          <span className='vital_token'></span>
        </span>
        <span className='supply'>Supply {props.supply.toLocaleString()}</span>
        <div className='card-body p-4'>
          <div className='text-center'>
            <span
              className='minus'
              onClick={() => {
                if (amount > 1 && props.isActive) setAmount(amount - 1);
                if (amount == 20) setShowMaxPerTransactionWarning(false);
              }}
            >
              <i className='fa fa-minus'></i>
            </span>
            <span className='amount'>{amount}</span>
            <span
              className='plus'
              onClick={() => {
                if (amount < 20 && props.isActive) setAmount(amount + 1);
                else setShowMaxPerTransactionWarning(true);
              }}
            >
              <i className='fa fa-plus'></i>
            </span>
          </div>
        </div>
        <div className='card-footer pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            {props.isActive &&
              (props.isLogged && props.transaction ? (
                <span
                  className='btn connect mt-3'
                  data-testid='loginBtn'
                  onClick={() => {
                    if (props.isActive)
                      props.transaction(
                        (props.egldprice * amount * Math.pow(10, 18)).toString()
                      );
                  }}
                >
                  Buy for {props.egldprice * amount} EGLD
                </span>
              ) : (
                <Link
                  to={routeNames.unlock}
                  className='btn connect mt-3'
                  data-testid='loginBtn'
                  // onClick={() => {
                  //   props.setShowModal(true);
                  // }}
                >
                  <span>
                    <BsFillLightningChargeFill /> Connect
                  </span>
                </Link>
              ))}
          </div>
          {showMaxPerTransactionWarning && (
            <div className='text-center text-danger'>
              You can only buy up to 20B VITAL per transaction!
            </div>
          )}
        </div>
        <p className='supply'>
          1 VITAL = {props.vitalprice}
          <br />
          {props.egldprice} EGLD for 1 000 000 000 VITAL
        </p>
      </div>
    </div>
  );
}

export default PresaleCard;
