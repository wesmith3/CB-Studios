import React from 'react';
import styles from './styling/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Cloud Based Studios</h3>
        <p>Your company description here.</p>
      </div>
      <div className={styles.column}>
        <h3>About</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>News & Film Updates</h3>
        <p>123 Main St, City, Country</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
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
