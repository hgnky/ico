import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import PresaleCard from '../../components/PresaleCard';
import { useGetAccountInfo, DappUI } from '@elrondnetwork/dapp-core';

const Home = () => {
  const { address } = useGetAccountInfo();

  const isLoggedIn = Boolean(address);

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
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='progress'>
                <div
                  className='progress-bar progress-round progress-bar-striped progress-bar-animated'
                  /*style='width: 30%'*/
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
            <PresaleCard
              isActive
              isLogged={isLoggedIn}
              round='Round 1'
              supply='3,334,000,000,000'
              egldprice='0.75 EGLD'
              vitalprice='0.00000000075 EGLD'
            />
            <PresaleCard
              isLogged={isLoggedIn}
              round='Round 2'
              supply='3,333,000,000,000'
              egldprice='1.15 EGLD'
              vitalprice='0.00000000115 EGLD'
            />
            <PresaleCard
              isLogged={isLoggedIn}
              round='Round 3'
              supply='3,333,000,000,000'
              egldprice='1.45 EGLD'
              vitalprice='0.00000000145 EGLD'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
