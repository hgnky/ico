import { DappUI } from '@elrondnetwork/dapp-core';
import React from 'react';
import { routeNames } from 'routes';

function UnlockCard(props: any) {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  return (
    <div className='px-4 card my-4 text-center'>
      <div className='card-body py-4 px-2 px-sm-2 mx-lg-4 d-flex flex-column'>
        <h4 className='mb-4'>Login</h4>
        <p className='mb-4'>pick a login method</p>

        <ExtensionLoginButton
          callbackRoute={routeNames.home}
          loginButtonText={'Extension'}
          className={'my-3 py-2 unlockButton'}
        />
        <WebWalletLoginButton
          callbackRoute={routeNames.home}
          loginButtonText={'Web wallet'}
          className={'my-3 py-2 unlockButton'}
        />
        <LedgerLoginButton
          loginButtonText={'Ledger'}
          callbackRoute={routeNames.home}
          className={'my-3 py-2 unlockButton'}
        />
        <WalletConnectLoginButton
          callbackRoute={routeNames.home}
          loginButtonText={'Maiar'}
          className={'my-3 py-2 unlockButton'}
        />
      </div>
    </div>
  );
}

export default UnlockCard;
