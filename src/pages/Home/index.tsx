import React, { useEffect, useState } from 'react';
import {
  useGetAccountInfo,
  DappUI,
  refreshAccount,
  sendTransactions
} from '@elrondnetwork/dapp-core';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  contractAddress,
  dAppName,
  environment,
  tokenIdentifier
} from 'config';
import PresaleCard from '../../components/PresaleCard';

function Home(props: any) {
  console.log(props);
  const { address } = useGetAccountInfo();
  const [supply, setSupply] = useState(10000000000000);
  const [balance, setBalance] = useState(0);
  const isLoggedIn = Boolean(address);
  const gateway = 'https://api.elrond.com';
  //const gateway = 'https://devnet-api.elrond.com';
  useEffect(() => {
    axios
      .get(`${gateway}/accounts/${contractAddress}/tokens/${tokenIdentifier}`)
      .then((res) => {
        const token = res.data;
        const tempBalance = token['balance'] / Math.pow(10, token['decimals']);
        setSupply(6666000000000 + tempBalance);
        setBalance(tempBalance);
      });
  }, []);

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
        processingMessage: 'Processing VITAL purchase',
        errorMessage: 'Error occured during VITAL purchase',
        successMessage: 'VITAL purchase successful'
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
              <p className='text-center text-white'>
                Initial Coin Offering (ICO) VITAL
                <br />
                Supply 10,000,000,000,000
              </p>
              <p className='text-center text-white'>Remaining supply</p>
              <span className='token_remain'>
                {supply.toLocaleString()}
                <span className='vital_token'></span>
              </span>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <ProgressBar
                label={`${
                  Math.round(
                    ((3340000000000 - balance) / 3340000000000) * 100 * 100
                  ) / 100
                }%`}
                animated={true}
                min={0}
                max={100}
                now={((3340000000000 - balance) / 3340000000000) * 100}
              ></ProgressBar>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <PresaleCard
              isActive={true}
              isLogged={isLoggedIn}
              round='Round 1'
              supply={balance}
              egldprice={0.75}
              vitalprice='0.00000000075 EGLD'
              transaction={sendBuyTransaction}
            />
            <PresaleCard
              isLogged={isLoggedIn}
              round='Round 2'
              supply={3333000000000}
              egldprice={1.15}
              vitalprice='0.00000000115 EGLD'
            />
            <PresaleCard
              isLogged={isLoggedIn}
              round='Round 3'
              supply={3333000000000}
              egldprice={1.45}
              vitalprice='0.00000000145 EGLD'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
function setTransactionSessionId(sessionId: string) {
  throw new Error('Function not implemented.');
}
