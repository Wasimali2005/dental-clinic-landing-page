'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of dental services including general dentistry (cleanings, exams), cosmetic dentistry (whitening, veneers), orthodontics (braces, aligners), and restorative procedures (implants, crowns).'
  },
  {
    id: 2,
    question: 'How do I book an appointment?',
    answer: 'You can easily book an appointment by calling us directly at (555) 123-4567, or by filling out the online contact form on this website. Our team will get back to you promptly to confirm your time.'
  },
  {
    id: 3,
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major dental insurance plans including Cigna, Delta Dental, MetLife, Aetna, and BlueCross. We also offer flexible payment options for uninsured patients.'
  },
  {
    id: 4,
    question: 'What are your office hours?',
    answer: 'We are open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 3:00 PM. We are closed on Sundays.'
  },
  {
    id: 5,
    question: 'Is teeth whitening safe?',
    answer: 'Absolutely. Professional teeth whitening performed by our certified dental team is completely safe and highly effective. We use industry-approved materials to protect your enamel and minimize sensitivity.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // Open first by default

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.heading}>Most asked questions</h2>
          <p className={styles.desc}>
            Find answers to the most common questions about our dental services, insurance, and procedures. If you don't see what you're looking for, feel free to reach out.
          </p>
          <Link href="#contact" className={styles.button}>
            Contact Us
          </Link>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.accordion}>
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`${styles.accordionItem} ${openId === faq.id ? styles.open : ''}`}
              >
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <span className={styles.icon}>{openId === faq.id ? '−' : '+'}</span>
                </button>
                <div 
                  className={styles.accordionBody}
                  style={{ maxHeight: openId === faq.id ? '200px' : '0' }}
                >
                  <div className={styles.answer}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
