// import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Advanced Technology',
      desc: 'Use of modern dental equipment for precision and comfort.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Experienced Team',
      desc: 'Qualified specialist doctors dedicated to your care.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Affordable Prices',
      desc: 'Competitive pricing and flexible payment options.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Emergency Care',
      desc: 'Available for immediate dental emergencies.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imagePlaceholder}>
            {/* <Image src="/images/smile-braces.jpg" alt="Patient with beautiful smile" fill className={styles.image} /> */}
          </div>
        </div>
        <div className={styles.contentColumn}>
          <span className={styles.eyebrow}>WHY CHOOSE US</span>
          <h2 className={styles.heading}>A great smile is worth protecting</h2>
          <p className={styles.desc}>
            Discover the many reasons why thousands of patients trust us with their dental health and ongoing care.
          </p>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
