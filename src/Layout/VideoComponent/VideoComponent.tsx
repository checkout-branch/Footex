
import React from 'react';
import styles from './VideoComponent.module.scss';

const VideoComponent = ({ headerText, videoSource }) => {
  return (
    <div className={styles.videoContainer}>
      
      <div className={styles.videoWrapper}>
      <div className={styles.headerSection}>
        <h2 className={styles.headerText}>{headerText}</h2>
      </div>
        <video 
          className={styles.video}
          autoPlay
          muted
          loop
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;
