import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';
import UnlockCard from 'components/UnlockCard';

function UnlockRoute(props: any) {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const { isLoggedIn } = useGetLoginInfo();
  const showHideModal = props.noShow
    ? 'modal display-none'
    : 'modal display-none';

  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = routeNames.home;
    }
  }, [isLoggedIn]);

  return (
    <div className='home d-flex flex-fill align-items-center d'>
      <div className='m-auto' data-testid='unlockPage'>
        <UnlockCard show={true}></UnlockCard>
      </div>
    </div>
  );
}

export default UnlockRoute;
