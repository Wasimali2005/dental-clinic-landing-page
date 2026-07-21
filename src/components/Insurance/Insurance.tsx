'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Insurance.module.css';

export default function Insurance() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const logos = [
    { id: 1, name: 'Cigna' },
    { id: 2, name: 'Delta Dental' },
    { id: 3, name: 'MetLife' },
    { id: 4, name: 'Aetna' },
    { id: 5, name: 'BlueCross' },
  ];

  return (
    <section className={styles.insurance} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>INSURANCE</span>
          <h2 className={styles.heading}>We accept most insurance plans</h2>
          <p className={styles.desc}>
            We work with a wide range of insurance providers to ensure you get the coverage you deserve. Contact us to verify your specific plan.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.logosContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {logos.map((logo, index) => (
            <motion.div 
              key={logo.id} 
              className={styles.logoItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              {/* Placeholder text acting as a logo for now */}
              <span className={styles.logoText}>{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
