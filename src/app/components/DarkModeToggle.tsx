"use client";
import styles from './DarkModeToggle.module.css';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Detectar preferencia del sistema al cargar, pero preferir modo oscuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(true); // Siempre iniciar en modo oscuro
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <button 
      className={styles.toggle} 
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
} 