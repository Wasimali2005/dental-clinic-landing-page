'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutUs.module.css';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    title: 'Personalized Treatment Plans'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: 'Gentle Care for All Ages'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: 'State-of-the-Art Technology'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    title: 'Flexible Scheduling'
  }
];

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.aboutUs} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageSection}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.imageGrid}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/about1.jpg"
                  alt="Professional dental care"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/about2.jpg"
                  alt="Dentist with patient"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.contentSection}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <span className={styles.eyebrow}>About Us</span>
          <h2 className={styles.title}>
            Professionals and Personalized Dental Excellence
          </h2>
          <p className={styles.description}>
            At our clinic, we believe everyone deserves a healthy, confident smile. Our state-of-the-art facility provides comprehensive dental services tailored to your unique needs, using the latest techniques to ensure maximum comfort and exceptional results.
          </p>
          
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={styles.featureItem}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + (index * 0.1) }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <span className={styles.featureText}>{feature.title}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
          >
            <Link href="#contact" className={styles.ctaButton}>
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
