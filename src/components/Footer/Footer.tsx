import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.logo}>DentalCare</div>
          <p className={styles.desc}>
            State-of-the-art dentistry solutions tailored to your unique smile. Quality care you can trust.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.nav}>
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <nav className={styles.nav}>
            <Link href="#services">General Dentistry</Link>
            <Link href="#services">Cosmetic Dentistry</Link>
            <Link href="#services">Orthodontics</Link>
            <Link href="#services">Pediatric Dentistry</Link>
            <Link href="#services">Dental Implants</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Info</h4>
          <div className={styles.infoList}>
            <p>123 Dental Street, Suite 100</p>
            <p>New York, NY 10001</p>
            <p className={styles.highlight}>(555) 123-4567</p>
            <p>hello@dentalcare.com</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} DentalCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
