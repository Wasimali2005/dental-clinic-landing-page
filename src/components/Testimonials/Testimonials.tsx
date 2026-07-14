// import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient',
      text: 'The team here is amazing. I used to have severe dental anxiety, but they made me feel completely at ease. Highly recommend their services!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Patient',
      text: 'State of the art facility and incredibly professional staff. I got my braces done here and the results are fantastic.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Patient',
      text: 'Best dental clinic in the city! They are always punctual, transparent with pricing, and genuinely care about their patients.',
      rating: 5,
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imagePlaceholder}>
            {/* <Image src="/images/testimonial-patient.jpg" alt="Happy patient" fill className={styles.image} /> */}
          </div>
        </div>
        <div className={styles.contentColumn}>
          <span className={styles.eyebrow}>TESTIMONIALS</span>
          <h2 className={styles.heading}>Join hundreds of satisfied patients</h2>
          
          <div className={styles.cardsContainer}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarPlaceholder}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={styles.name}>{testimonial.name}</h3>
                    <p className={styles.role}>{testimonial.role}</p>
                  </div>
                </div>
                <div className={styles.stars}>
                  {renderStars(testimonial.rating)}
                </div>
                <p className={styles.quote}>"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
