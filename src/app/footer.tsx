import React from 'react';
import styles from './styling/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Cloud Based Studios</h3>
        <ul>
          <li><a href="/">Services</a></li>
          <li><a href="/products">Latest Videos</a></li>
          <li><a href="/services">Studio Tour</a></li>
          <li><a href="/contact">Press & News</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>About</h3>
       <p>Lorem ipsum dolor sit amet. Turel upn gravida nibh vel velit auctor aliquet aen sollic conseut ipsutis.</p>
      </div>
      <div className={styles.column}>
        <h3>News & Film Updates</h3>
        <p>Lorem Ipsner gravida nibh velml auctsi aliquet. Aene sollic conseut.</p>
      </div>
      <div className={styles.column}>
        <h3>Follow On Instagram</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
