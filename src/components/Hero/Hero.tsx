import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroLeft}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Dental Care</span>
          <h1 className={styles.heading}>State of the art dentistry solutions</h1>
          <p className={styles.subtitle}>
            Experience top-tier dental care with advanced technology and a compassionate team. Your smile is our priority.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="#contact" className={styles.primaryButton}>
              Book Appointment
            </Link>
            <Link href="#about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero-dentist.jpg"
            alt="Smiling female dentist in clinic"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
