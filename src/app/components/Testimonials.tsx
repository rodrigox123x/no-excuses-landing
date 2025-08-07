import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Esta app cambió mi relación con el tiempo. Ahora tengo control total sobre mis hábitos digitales.',
    name: 'María González',
    role: 'Estudiante universitaria',
    avatar: '👩‍🎓',
    rating: 5
  },
  {
    text: 'Increíble cómo algo tan simple puede hacer una diferencia tan grande. Soy mucho más productivo.',
    name: 'Carlos Ruiz',
    role: 'Emprendedor',
    avatar: '👨‍💼',
    rating: 5
  },
  {
    text: '¡Por fin siento que controlo mi día y no el móvil a mí! Mis metas nunca habían sido tan claras.',
    name: 'Ana Martínez',
    role: 'Diseñadora',
    avatar: '👩‍🎨',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Lo que dicen nuestros usuarios</h2>
          <p className={styles.sectionSubtitle}>
            Miles de personas ya han transformado su relación con la tecnología
          </p>
        </div>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((t, i) => (
            <blockquote 
              className={styles.testimonial} 
              key={i}
              style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}
            >
              <div className={styles.quoteIcon}>💬</div>
              <p className={styles.quote}>"{t.text}"</p>
              <div className={styles.rating}>
                {Array.from({ length: t.rating }, (_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
} 