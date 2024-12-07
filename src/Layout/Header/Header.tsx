import React from 'react'
import styles from "./Header.module.scss";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logoImage from "../../assets/logo.png";
const Header = () => {
  return (<>
    <header className={styles.header}>
      <div className={styles.logo}> <img src={logoImage} alt="Footex Logo" className={styles.logoImage} /></div>
      <div className={styles.navRight}>
        <button className={styles.topButtons}><a href="https://www.instagram.com/footex_/#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a></button>
        <button className={styles.topButtons}><a href="https://api.whatsapp.com/send/?phone=919656060874&text&type=phone_number&app_absent=0" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />
        </a></button>
        <button className={styles.topButtons}><RxHamburgerMenu className={styles.icon} /></button>
      </div>
    </header>
  </>
  )
}

export default Header;