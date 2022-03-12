import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contractAddress, dAppName } from 'config';
import { routeNames } from 'routes';
import PresaleCard from '../../components/PresaleCard';
import {
  useGetAccountInfo,
  DappUI,
  refreshAccount,
  sendTransactions
} from '@elrondnetwork/dapp-core';
import { GasLimit } from '@elrondnetwork/erdjs/out';

const Home = () => {
  const { address } = useGetAccountInfo();

  const isLoggedIn = Boolean(address);

  const sendBuyTransaction = async (value: any) => {
    const pingTransaction = {
      value: value,
      data: 'buyToken',
      receiver: contractAddress,
      gasLimit: 6000000
    };
    await refreshAccount();

    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: pingTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing VITAL transaction',
        errorMessage: 'An error has occured during VITAL purchase',
        successMessage: 'VITAL purchase transaction successful'
      },
      redirectAfterSign: false
    });
    if (sessionId != null) {
      setTransactionSessionId(sessionId);
    }
  };

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
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
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
              egldprice={0.75}
              vitalprice='0.00000000075 EGLD'
              transaction={sendBuyTransaction}
            />
            <PresaleCard
              isLogged={isLoggedIn}
              round='Round 2'
              supply='3,333,000,000,000'
              egldprice={1.15}
              vitalprice='0.00000000115 EGLD'
            />
            <PresaleCard
              isLogged={isLoggedIn}
              round='Round 3'
              supply='3,333,000,000,000'
              egldprice={1.45}
              vitalprice='0.00000000145 EGLD'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
function setTransactionSessionId(sessionId: string) {
  throw new Error('Function not implemented.');
}
