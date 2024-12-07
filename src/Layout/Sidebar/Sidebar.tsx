import React from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.menuList}>
        <li>OFFERS</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
        <li>RETURN POLICY</li>
        <li>PRIVACY POLICY</li>
      </ul>
    </div>
  );
};

export default Sidebar;