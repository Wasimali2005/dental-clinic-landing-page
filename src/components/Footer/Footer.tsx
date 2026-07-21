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
            <a href="https://www.facebook.com/share/1857BNt9zY/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/tech4edges/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
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
            <a 
              href="https://maps.app.goo.gl/CRy43GJPC4nXtCwo6?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <p>Office No. 322 (A), Block D,</p>
              <p>3rd Floor, Sami Tower,</p>
              <p>Ring Road, Peshawar, Pakistan</p>
            </a>
            <p className={styles.highlight}>
              <a 
                href="https://wa.me/923374005515" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                +92 337 4005515
              </a>
            </p>
            <p>
              <a 
                href="mailto:info@tech4edges.com"
                className={styles.contactLink}
              >
                info@tech4edges.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; 2026 DentalCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
