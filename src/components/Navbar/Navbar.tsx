'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">DentalCare</Link>
      </div>

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="#faq" onClick={() => setIsOpen(false)}>FAQ</Link>
        <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>

      <div className={styles.ctaContainer}>
        <div className={styles.phone}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.phoneIcon}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>(555) 123-4567</span>
        </div>
        <Link href="#contact" className={styles.ctaButton}>
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
