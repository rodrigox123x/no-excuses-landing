"use client";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const scrollToSubscribe = () => {
    const subscribeSection = document.getElementById('subscribe-section');
    if (subscribeSection) {
      subscribeSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Enfocar el campo de email después del scroll
      setTimeout(() => {
        const emailInput = document.getElementById('email-input') as HTMLInputElement;
        if (emailInput) {
          emailInput.focus();
        }
      }, 1000);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>No Excuses</h1>
        <p className={styles.subtitle}>Conviértete en la mejor versión de ti mismo. Deja atrás la procrastinación con notificaciones motivadoras que te inspiran a vivir mejor.</p>
        <button className={styles.cta} onClick={scrollToSubscribe}>Únete a la lista de espera</button>
        <span className={styles.launch}>Lanzamiento previsto para el 3er trimestre de 2025</span>
      </div>
      <div className={styles.mockupContainer}>
        <div className={styles.mockupPlaceholder}>
          <div className={styles.mockupScreen}>
            <div className={styles.statusBar}>
              <span className={styles.time}>9:41</span>
              <div className={styles.statusIcons}>
                <span className={styles.signal}>●●●</span>
                <span className={styles.wifi}>📶</span>
                <span className={styles.battery}>🔋</span>
              </div>
            </div>
            <div className={styles.mockupHeader}>
              <div className={styles.headerContent}>
                <span className={styles.greeting}>Buenos días, Alex</span>
                <h2 className={styles.appTitle}>No Excuses</h2>
              </div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.statsCard}>
                <div className={styles.mainStat}>
                  <span className={styles.statLabel}>Tiempo de pantalla hoy</span>
                  <div className={styles.statValueContainer}>
                    <div className={styles.circularProgress}>
                      <span className={styles.statValue}>2h 15m</span>
                    </div>
                    <div className={styles.progressInfo}>
                      <span className={styles.target}>Meta: 3h</span>
                      <span className={styles.progress}>🟢 En camino</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.levelCard}>
                <div className={styles.levelHeader}>
                  <span className={styles.levelLabel}>Nivel de disciplina</span>
                  <div className={styles.levelBadge}>
                    <span className={styles.levelNumber}>7</span>
                    <span className={styles.levelText}>Disciplinado</span>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>

              <div className={styles.quickActions}>
                <div className={styles.actionButton}>
                  <span className={styles.actionIcon}>🔒</span>
                  <span className={styles.actionText}>Bloquear apps</span>
                </div>
                <div className={styles.actionButton}>
                  <span className={styles.actionIcon}>📊</span>
                  <span className={styles.actionText}>Ver estadísticas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 