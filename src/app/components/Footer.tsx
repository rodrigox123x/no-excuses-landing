import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <Link href="/privacy-policy" className={styles.link}>Política de privacidad</Link>
        <Link href="/terms" className={styles.link}>Términos y condiciones</Link>
        <Link href="/cookie-policy" className={styles.link}>Política de Cookies</Link>
      </nav>
      <span className={styles.copyright}>
        © {new Date().getFullYear()} No Excuses. Todos los derechos reservados.
      </span>
    </footer>
  );
} 