import styles from './CoachSoon.module.css';

export default function CoachSoon() {
  return (
    <section className={styles.coachSection}>
      <h2 className={styles.title}>Próximamente: Tu coach personal con IA</h2>
      <p className={styles.desc}>
        Un asistente inteligente que te dará consejos personalizados, te ayudará a organizar tu día y te motivará para rendir al máximo. ¡Prepárate para llevar tu disciplina al siguiente nivel con inteligencia artificial!
      </p>
      <div className={styles.mockupContainer}>
        <div className={styles.chatMockup}>
          <div className={styles.chatHeader}>
            <span className={styles.coachAvatar}>🤖</span>
            <span className={styles.coachName}>Coach IA</span>
          </div>
          <div className={styles.chatBody}>
            <div className={styles.messageUser}>
              <span className={styles.userAvatar}>🧑</span>
              <div className={styles.userBubble}>
                Hoy me siento con poca energía y me distraigo mucho con el móvil.
              </div>
            </div>
            <div className={styles.messageCoach}>
              <span className={styles.coachAvatarSmall}>🤖</span>
              <div className={styles.coachBubble}>
                ¡Entiendo! ¿Te gustaría que te ayude a planificar 3 tareas clave para hoy y te envíe recordatorios motivadores?
              </div>
            </div>
            <div className={styles.messageUser}>
              <span className={styles.userAvatar}>🧑</span>
              <div className={styles.userBubble}>
                Sí, por favor. Quiero enfocarme en estudiar, hacer ejercicio y leer.
              </div>
            </div>
            <div className={styles.messageCoach}>
              <span className={styles.coachAvatarSmall}>🤖</span>
              <div className={styles.coachBubble}>
                ¡Perfecto! Te ayudo a organizar tu día:
                <ul>
                  <li>📚 1h de estudio sin distracciones</li>
                  <li>🏃 30 min de ejercicio</li>
                  <li>📖 20 min de lectura</li>
                </ul>
                ¿Quieres que te recuerde cada bloque y te motive con frases personalizadas?
              </div>
            </div>
          </div>
          <div className={styles.chatInputMock}>
            <input type="text" placeholder="Escribe tu mensaje..." disabled />
            <button disabled>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
} 