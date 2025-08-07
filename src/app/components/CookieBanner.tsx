"use client";
import styles from './CookieBanner.module.css';
import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={styles.banner}>
      <span>Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra <a href="#" className={styles.link}>política de cookies</a>.</span>
      <button className={styles.button} onClick={() => setVisible(false)}>Aceptar</button>
      <button className={styles.close} onClick={() => setVisible(false)} aria-label="Cerrar aviso">×</button>
    </div>
  );
} 