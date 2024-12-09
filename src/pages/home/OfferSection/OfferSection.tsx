import React, { useState, useEffect } from 'react';
import styles from './OfferSection.module.scss';
import offerImage from '../../../assets/offer.png';

const OfferSection = () => {
    const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={styles.offerContainer}>
            <img src={offerImage} alt="Offer ad image" className={styles.offerImage} />
            <div className={styles.timerContainer}>
                <div className={styles.dealText}>24 HRS DEAL</div>
                <div className={styles.timerText}>
                    {timeLeft > 0 ? formatTime(timeLeft) : 'OFFER EXPIRED'}
                </div>
                <div className={styles.timerLabels}>
                    <div className={styles.timerLabelsChildren}>HRS</div>
                    <div className={styles.timerLabelsChildren}>MIN</div>
                    <div className={styles.timerLabelsChildren}>SEC</div>
                </div>
                <button className={styles.claimButton} aria-label="Claim this offer">CLAIM OFFER</button>
                <div className={styles.dealText}>SALE IS LIVE</div>
            </div>
        </div>
    );
};

export default OfferSection;
