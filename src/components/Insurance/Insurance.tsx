import styles from './Insurance.module.css';

export default function Insurance() {
  const logos = [
    { id: 1, name: 'Cigna' },
    { id: 2, name: 'Delta Dental' },
    { id: 3, name: 'MetLife' },
    { id: 4, name: 'Aetna' },
    { id: 5, name: 'BlueCross' },
  ];

  return (
    <section className={styles.insurance}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>INSURANCE</span>
          <h2 className={styles.heading}>We accept most insurance plans</h2>
          <p className={styles.desc}>
            We work with a wide range of insurance providers to ensure you get the coverage you deserve. Contact us to verify your specific plan.
          </p>
        </div>
        
        <div className={styles.logosContainer}>
          {logos.map((logo) => (
            <div key={logo.id} className={styles.logoItem}>
              {/* Placeholder text acting as a logo for now */}
              <span className={styles.logoText}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
