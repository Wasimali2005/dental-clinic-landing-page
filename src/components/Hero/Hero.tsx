'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroLeft}>
        <div className={styles.content}>
          <motion.span 
            className={styles.eyebrow}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Dental Care
          </motion.span>
          <motion.h1 
            className={styles.heading}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            State of the art dentistry solutions
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          >
            Experience top-tier dental care with advanced technology and a compassionate team. Your smile is our priority.
          </motion.p>
          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          >
            <Link href="#contact" className={styles.primaryButton}>
              Book Appointment
            </Link>
            <Link href="#about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <Image
            src="/images/hero-dentist.jpg"
            alt="Smiling female dentist in clinic"
            fill
            className={styles.image}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
