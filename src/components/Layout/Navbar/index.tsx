import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import VitalLogo from './../../../assets/img/logo_header.png';
const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar className='px-4 py-3'>
      <div className='container-fluid'>
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          to={routeNames.home}
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
              to={routeNames.home}
              className='btn connect mt-3'
              data-testid='loginBtn'
              onClick={handleLogout}
            >
              <BsFillLightningChargeFill />
              <span>Disconnect</span>
            </Link>
          ) : (
            <Link
              to={routeNames.unlock}
              className='btn connect mt-3'
              data-testid='loginBtn'
            >
              <BsFillLightningChargeFill />
              <span>Connect</span>
            </Link>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
