import React, { useState } from 'react';
import {
  FaHome,
  FaUserFriends,
  FaHistory,
  FaTags,
  FaTree,
  FaEye,
  FaBars,
 FaTimes
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <FaHome />,
    },
    {
      path: '/join_user',
      name: 'Join User',
      icon: <FaUserFriends />,
    },
    {
      path: '/paymentHistory',
      name: 'Payment History',
      icon: <FaHistory />,
    },
    {
      path: '/pin_request',
      name: 'Pin Request',
      icon: <FaTags />,
    },
    {
      path: '/tree',
      name: 'Tree',
      icon: <FaTree />,
    },
    {
      path: '/view_pin',
      name: 'View Pin',
      icon: <FaEye />,
    },
  ];

  return (
    <div className='container'>
      <div style={{ width: isOpen ? '250px' : '50px' }} className='sidebar'>
        <div className='top_section'>
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
            Logo
          </h1>
          {/* <div style={{ marginLeft: isOpen ? '50px' : 0 }} className='bars'>
            <FaBars onClick={toggle} />
          </div> */}
          <div style={{ marginLeft: isOpen ? '50px' : 0 }} className='bars'>
            {isOpen ? (
              <FaTimes onClick={toggle} />
            ) : (
              <FaBars onClick={toggle} />
            )}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeClassName='active'
          >
            <div className='icon'>{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className='link_text'>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
