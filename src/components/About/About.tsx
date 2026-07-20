'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';

const blocks = [
  {
    id: 'block1',
    eyebrow: 'General dentistry',
    title: 'Clean, check, and protect your smile',
    desc: 'We believe everyone deserves a healthy, confident smile. Our state-of-the-art facility provides comprehensive dental services tailored to your unique needs, using the latest techniques to ensure maximum comfort.',
    image: "/images/about1.jpg",
    reverse: false,
  },
  {
    id: 'block2',
    eyebrow: 'Cosmetic dentistry',
    title: 'Confident smiles made with expert precision',
    desc: 'Quality dental care shouldn\'t break the bank. We offer transparent pricing, flexible payment plans, and accept most major insurance providers to make your treatment as affordable as possible.',
    image: '/images/about2.jpg',
    reverse: true,
  },
  {
    id: 'block3',
    eyebrow: 'Orthodontics',
    title: 'Gentle straightening, lasting results',
    desc: 'We align teeth gently and precisely using modern techniques that improve your long-term dental health.',
    image: '/images/about3.jpg',
    reverse: false,
  }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(`.${styles.block}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      {blocks.map((block) => (
        <div 
          key={block.id} 
          className={`${styles.block} ${block.reverse ? styles.reverse : ''}`}
        >
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>{block.eyebrow}</span>
            <h2 className={styles.title}>{block.title}</h2>
            <p className={styles.desc}>{block.desc}</p>
            <Link href="#contact" className={styles.button}>
              Learn More
            </Link>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
               <Image src={block.image} alt={block.title} fill className={styles.image} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
