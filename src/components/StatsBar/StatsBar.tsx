'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './StatsBar.module.css';

const statsData = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 4, suffix: '', label: 'Specialist Doctors' },
  { value: 200, suffix: '+', label: 'Happy Patients' },
  { value: 98, suffix: '%', label: 'Success Rate' },
];

export default function StatsBar() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      // Animate counters
      statsData.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepTime = duration / steps;
        const increment = stat.value / steps;
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            clearInterval(timer);
            current = stat.value;
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, stepTime);
      });
    }
  }, [isInView, hasAnimated]);

  return (
    <section className={styles.statsBar} ref={sectionRef}>
      {statsData.map((stat, index) => (
        <motion.div 
          key={index} 
          className={styles.statItem}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.number}>
            {counts[index]}{stat.suffix}
          </div>
          <div className={styles.label}>{stat.label}</div>
        </motion.div>
      ))}
    </section>
  );
}
