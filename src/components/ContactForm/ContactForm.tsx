'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ContactForm.module.css';


export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      service: (document.getElementById('service') as HTMLSelectElement).value,
      date: (document.getElementById('date') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value,
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to send appointment request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imagePlaceholder}>
            { <Image src="/images/contact-bg.png" alt="Dentist at work" fill className={styles.image} /> }
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.formColumn}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.formCard}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank You!</h3>
                <p>Your appointment request has been received. Our team will contact you shortly to confirm your booking.</p>
                <button 
                  className={styles.submitButton} 
                  onClick={() => setIsSubmitted(false)}
                >
                  Book Another
                </button>
              </div>
            ) : (
              <>
                <span className={styles.eyebrow}>BOOK A VISIT</span>
                <h2 className={styles.heading}>We're here to help you</h2>
                <p className={styles.desc}>
                  Fill out the form below and we'll get back to you during our regular business hours.
                </p>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required placeholder="John Doe" />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" required placeholder="john@example.com" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" required placeholder="+92 344 1234567" />
                    </div>
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service</label>
                      <select id="service" required defaultValue="">
                        <option value="" disabled>Select a service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="ortho">Orthodontics</option>
                        <option value="emergency">Emergency Care</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="date">Preferred Date</label>
                      <input type="date" id="date" required />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea id="message" rows={4} placeholder="How can we help you?"></textarea>
                  </div>
                  
                  {errorMsg && <p className={styles.error}>{errorMsg}</p>}
                  <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? (<><span className={styles.spinner} /> Booking Appointment...</>) : 'Book Appointment'}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
