'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ContactForm.module.css';

// ─── Validation helpers ──────────────────────────────────────────────────────

/** Phone: +92XXXXXXXXXX (13 chars) OR 0XXXXXXXXXX (11 digits) */
const isValidPhone = (phone: string) =>
  /^(\+92\d{10}|0\d{10})$/.test(phone.trim());

/** Email: must end with @gmail.com */
const isValidEmail = (email: string) =>
  /^[^\s@]+@gmail\.com$/i.test(email.trim());

/** Date: must not be in the past */
const isValidDate = (date: string) => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(date) >= today;
};


// ─── Component ───────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [serverError, setServerError] = useState('');
  // Compute today's date only on client to avoid SSR prerender error
  const [todayStr] = useState(() => new Date().toISOString().split('T')[0]);

  // Controlled inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ── Validate & Submit ────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    setServerError('');

    // Strict validation — stop on first error
    if (!name.trim()) {
      setValidationError('❌ Full Name khali nahi ho sakta.');
      return;
    }
    if (!isValidEmail(email)) {
      setValidationError('❌ Email mein @gmail.com hona zaroori hai (e.g. name@gmail.com).');
      return;
    }
    if (!isValidPhone(phone)) {
      setValidationError('❌ Phone number 11 digits ka hona chahiye (e.g. 03001234567) ya +92 ke saath (e.g. +923001234567).');
      return;
    }
    if (!service) {
      setValidationError('❌ Koi service select karna zaroori hai.');
      return;
    }
    if (!isValidDate(date)) {
      setValidationError('❌ Preferred date aaj se pehle nahi ho sakti.');
      return;
    }

    setLoading(true);

    const formData = {
      website_name: 'DentalCare',   // {{website_name}} in EmailJS template
      full_name: name.trim(),        // {{full_name}}
      email: email.trim(),           // {{email}}
      phone: phone.trim(),           // {{phone}}
      service,                       // {{service}}
      preferred_date: date,          // {{preferred_date}}
      message: message.trim() || '—', // {{message}}
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string }
      );
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setServerError('Failed to send appointment request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate('');
    setMessage('');
    setValidationError('');
    setServerError('');
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.container}>

        {/* Left image column */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imagePlaceholder}>
            <Image src="/images/contact-bg.png" alt="Dentist at work" fill className={styles.image} />
          </div>
        </motion.div>

        {/* Right form column */}
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
                <button className={styles.submitButton} onClick={resetForm}>
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

                {/* ── Validation / Server Error Banner ── */}
                {(validationError || serverError) && (
                  <div className={styles.errorBanner} role="alert">
                    {validationError || serverError}
                  </div>
                )}

                <form className={styles.form} onSubmit={handleSubmit} noValidate>

                  {/* Full Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="name@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="03001234567 or +923001234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Service + Date */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Service</label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="General Dentistry">General Dentistry</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Emergency Care">Emergency Care</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="date">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        min={todayStr}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

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
