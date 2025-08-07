import styles from './LoadingVisual.module.css';

export default function LoadingVisual() {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.text}>Preparando algo grande</span>
      <span className={styles.dots} aria-label="Cargando">...</span>
    </div>
  );
} 