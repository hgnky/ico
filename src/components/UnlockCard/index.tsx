import { DappUI } from '@elrondnetwork/dapp-core';
import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import { routeNames } from 'routes';

function UnlockCard(props: any) {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  return (
    <Modal
      show={props.show}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header className='text-center'>
        <Modal.Title className='w-100' id='contained-modal-title-vcenter'>
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='unlockCard px-4 card my-4 text-center'>
          <div className='card-body py-4 px-2 px-sm-2 mx-lg-4 d-flex flex-column'>
            <p className='mb-4 text-dark'>Select a login method</p>

            <ExtensionLoginButton
              onClick={() => {
                console.log('test');
                props.setShowModal(false);
              }}
              callbackRoute={routeNames.home}
              loginButtonText={'Extension'}
              className={'my-3 py-2 unlockButton'}
            />
            <WebWalletLoginButton
              onClick={() => props.setShowModal(false)}
              callbackRoute={routeNames.home}
              loginButtonText={'Web wallet'}
              className={'my-3 py-2 unlockButton'}
            />
            <LedgerLoginButton
              onClick={() => props.setShowModal(false)}
              loginButtonText={'Ledger'}
              callbackRoute={routeNames.home}
              className={'my-3 py-2 unlockButton'}
            />
            <WalletConnectLoginButton
              onClick={() => props.setShowModal(false)}
              callbackRoute={routeNames.home}
              loginButtonText={'Maiar'}
              className={'my-3 py-2 unlockButton'}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UnlockCard;
