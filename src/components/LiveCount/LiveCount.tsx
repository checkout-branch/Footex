import React, { useEffect, useState } from 'react';
import styles from './Livecount.module.scss';

const LiveCount = () => {
    const [viewerCount, setViewerCount] = useState(120);
    const minViewers = 52; 
    const maxViewers = 120; 


    useEffect(() => {
        const getRandomViewers = () => {
            return Math.floor(Math.random() * (maxViewers - minViewers + 1)) + minViewers;
        };  
        setViewerCount(getRandomViewers());
        const interval = setInterval(() => {
            setViewerCount(getRandomViewers());
        }, 10000); 
        return () => clearInterval(interval);
    }, []);


    return(
        <div className={styles.livecount}>
            <h3>LIVE VIEWERS: {viewerCount}</h3>
        </div>
    );
}

export default LiveCount;
