import React, { useState } from 'react';
import { DappUI, DappProvider } from '@elrondnetwork/dapp-core';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import { routeNames } from 'routes';
import routes from 'routes';
import '@elrondnetwork/dapp-core/build/index.css';
import { environment } from 'config';
import UnlockRoute from 'pages/UnlockPage';
import UnlockCard from 'components/UnlockCard';
import { WalletConnectLoginContainer } from '@elrondnetwork/dapp-core/build/UI';
const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage }
} = DappUI;

const App = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  function handleShowModal(showModal: boolean) {
    setShowConnectModal(showModal);
  }
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
        completedTransactionsDelay={200}
      >
        <Layout>
          <UnlockCard show={showConnectModal}></UnlockCard>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals className='custom-class-for-modals' />
          <Routes>
            <Route
              path={routeNames.unlock}
              element={
                <UnlockRoute
                  loginRoute={routeNames.home}
                  setModal={handleShowModal}
                />
              }
            />
            {routes.map((route: any, index: number) => (
              <Route
                path={route.path}
                key={'route-key-' + index}
                element={<route.component setModal={handleShowModal} />}
              />
            ))}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </DappProvider>
    </Router>
  );
};

export default App;
