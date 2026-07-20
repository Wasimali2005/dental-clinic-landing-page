'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imagePlaceholder}>
            { <Image src="/images/contact-bg.png" alt="Dentist at work" fill className={styles.image} /> }
          </div>
        </div>
        
        <div className={styles.formColumn}>
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
                      <input type="tel" id="phone" required placeholder="(555) 123-4567" />
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
                  
                  <button type="submit" className={styles.submitButton}>
                    Book Appointment
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
