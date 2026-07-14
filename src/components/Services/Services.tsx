import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>General Dentistry</h3>
          <p className={styles.cardDesc}>
            Comprehensive exams, professional cleanings, and preventive care to keep your teeth and gums healthy.
          </p>
          <Link href="#contact" className={styles.cardLink}>
            Learn More <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
