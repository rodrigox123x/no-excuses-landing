import styles from './Benefits.module.css';

const benefits = [
  {
    icon: '🔒',
    title: 'Bloqueo inteligente de apps',
    desc: 'Evita distracciones y mantén el control de tu tiempo con bloqueos automáticos y flexibles.',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
  },
  {
    icon: '🏆',
    title: 'Nivel de disciplina',
    desc: 'Sube si usas el móvil menos de 3h al día. ¡Convierte el enfoque en un juego diario!',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
  },
  {
    icon: '📊',
    title: 'Metas diarias + estadísticas',
    desc: 'Define objetivos, revisa tu progreso y motívate con gráficas y datos visuales.',
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)'
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>¿Por qué elegir No Excuses?</h2>
          <p className={styles.sectionSubtitle}>
            Transforma tu relación con la tecnología con herramientas que realmente funcionan
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {benefits.map((b, i) => (
            <div 
              className={styles.card} 
              key={i}
              style={{ '--gradient': b.gradient } as React.CSSProperties}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{b.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 