import React, { useState } from 'react';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <div className={styles.navbar}>
                <div>
                    <img  className={styles.logo} src={logo} alt="logo" />
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuItem}>Home</div>
                    <div className={styles.menuItem}>About</div>
                    <div className={styles.menuItem}>Contact</div>
                    <div className={styles.menuItem}>Policy</div>
                </div>
                <div>
                   
                <div className={styles.menuToggle} onClick={toggleSidebar}>
                    <FaBars />
                </div>
                    </div>
            </div>

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ''}`}>
                <div className={styles.closeBtn} onClick={toggleSidebar}>&#10005;</div>
                <div className={styles.menu}>
                   <div className={styles.menuItem}>Home</div>
                    <div className={styles.menuItem}>About</div>
                    <div className={styles.menuItem}>Contact</div>
                    <div className={styles.menuItem}>Policy</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
