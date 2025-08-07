import styles from './MotivationalNotifications.module.css';

export default function MotivationalNotifications() {
  const motivationalMessages = [
    "🎯 Cada minuto lejos del móvil es un paso hacia tus metas",
    "💪 Tu futuro yo te agradecerá por este momento de disciplina",
    "🌟 Las personas exitosas controlan sus distracciones",
    "🚀 Este es el momento de actuar, no de procrastinar",
    "💎 Tu tiempo es tu recurso más valioso"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Notificaciones motivadoras fuera de la app</h2>
          <p className={styles.subtitle}>
            Recibe mensajes inspiradores directamente en la pantalla de bloqueo o inicio de tu móvil, incluso cuando no estás usando la app. ¡Motívate en cualquier momento!
          </p>
        </div>
        <div className={styles.mockupContainer}>
          <div className={styles.lockScreenMockup}>
            <div className={styles.lockScreenTop}>
              <span className={styles.lockTime}>08:42</span>
              <span className={styles.lockDate}>Sábado, 6 de julio</span>
            </div>
            <div className={styles.notificationsStack}>
              <div className={styles.pushNotification}>
                <div className={styles.pushHeader}>
                  <span className={styles.pushIcon}>🎯</span>
                  <span className={styles.pushApp}>No Excuses</span>
                  <span className={styles.pushTime}>ahora</span>
                </div>
                <div className={styles.pushBody}>
                  Cada minuto lejos del móvil es un paso hacia tus metas. ¿Qué podrías lograr hoy?
                </div>
              </div>
              <div className={styles.pushNotification}>
                <div className={styles.pushHeader}>
                  <span className={styles.pushIcon}>💪</span>
                  <span className={styles.pushApp}>No Excuses</span>
                  <span className={styles.pushTime}>hace 5 min</span>
                </div>
                <div className={styles.pushBody}>
                  Tu futuro yo te agradecerá por este momento de disciplina.
                </div>
              </div>
              <div className={styles.pushNotification}>
                <div className={styles.pushHeader}>
                  <span className={styles.pushIcon}>🌟</span>
                  <span className={styles.pushApp}>No Excuses</span>
                  <span className={styles.pushTime}>hace 12 min</span>
                </div>
                <div className={styles.pushBody}>
                  Las personas exitosas controlan sus distracciones.
                </div>
              </div>
            </div>
            <div className={styles.lockScreenBottom}>
              <span className={styles.unlockHint}>Desliza hacia arriba para desbloquear</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 