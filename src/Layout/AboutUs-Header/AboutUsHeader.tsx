
import React from 'react';
import styles from './AboutUsHeader.module.scss';
import { useNavigate } from 'react-router-dom';


const AboutUsHeader = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    return(
        < div className={styles.HeaderAboutUs}>
            <button onClick={handleBack} className={styles.backbutton}>BACK</button>
            <h1>OUR STORY</h1>
            <p>Welcome to Footex Store! Based in Kerala, we offer the best quality shoes at an unbeatable price of ₹999 for 2 pairs. 
                We ensure meticulous packing and prompt shipping to deliver your orders with care and efficiency.</p>
        </div>
    )
}

export default AboutUsHeader;