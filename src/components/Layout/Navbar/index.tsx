import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import EclairConnectBlack from './../../../assets/img/eclair_black.png';
import VitalLogo from './../../../assets/img/logo_header.png';

const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar className='px-4 py-3'>
      <div className='container-fluid'>
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          to={isLoggedIn ? routeNames.dashboard : routeNames.home}
        >
          <img src={VitalLogo} className='vital-network-logo' />
        </Link>
        <Nav className='ml-auto'>
          <Nav.Link
            className='whitepaper mt-3'
            target='_blank'
            href='https://vitalnetwork.medium.com/vital-network-white-paper-25cd8c91e4f3'
          >
            Whitepaper
          </Nav.Link>
          {isLoggedIn ? (
            <Link
              to={routeNames.unlock}
              className='btn connect mt-3'
              data-testid='loginBtn'
              onClick={handleLogout}
            >
              <img width='10' height='15' src={EclairConnectBlack} />
              <span>Disconnect</span>
            </Link>
          ) : (
            <Link
              to={routeNames.unlock}
              className='btn connect mt-3'
              data-testid='loginBtn'
            >
              <img width='10' height='15' src={EclairConnectBlack} />
              <span>Connect</span>
            </Link>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
