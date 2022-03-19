import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import UnlockCard from 'components/UnlockCard';
import { routeNames } from 'routes';

function UnlockRoute(props: any) {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const { isLoggedIn } = useGetLoginInfo();

  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = routeNames.home;
    }
  }, [isLoggedIn]);

  return (
    <div className='container'>
      <div className='row justify-content-center align-self-center py-2'>
        <UnlockCard></UnlockCard>
      </div>
    </div>
  );
}

export default UnlockRoute;
