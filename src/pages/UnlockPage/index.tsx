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
    <div className='home d-flex flex-fill align-items-center d'>
      <div className='m-auto' data-testid='unlockPage'>
        <UnlockCard></UnlockCard>
      </div>
    </div>
  );
}

export default UnlockRoute;
