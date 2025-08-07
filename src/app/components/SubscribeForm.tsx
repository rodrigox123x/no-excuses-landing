"use client";
import styles from './SubscribeForm.module.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // ⚠️ REEMPLAZA ESTOS VALORES CON LOS TUYOS DE EMAILJS:
      const SERVICE_ID = 'service_nk919p7';      
      const TEMPLATE_ID = 'template_zdrz8he';    
      const PUBLIC_KEY = 'Z02RTJnR6O6u_vc8S';      

      // EmailJS ya está importado arriba

      const templateParams = {
        user_email: email,
        timestamp: new Date().toLocaleString('es-ES', {
          timeZone: 'Europe/Madrid',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSubmitted(true);
      setEmail('');
      
      // Reset después de 5 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error enviando email:', error);
      setError('Hubo un error. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.subscribeSection}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          id="email-input"
          type="email"
          className={styles.input}
          placeholder="Tu correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button 
          className={styles.button} 
          type="submit" 
          disabled={loading || submitted || !email}
        >
          {loading ? 'Enviando...' : submitted ? '¡Listo! 🎉' : 'Unirme a la lista de espera'}
        </button>
      </form>
      
      {error && (
        <div style={{
          color: '#ff4444',
          textAlign: 'center',
          marginTop: '1rem',
          padding: '0.5rem',
          fontSize: '0.9rem'
        }}>
          {error}
        </div>
      )}
      
      {submitted && (
        <div style={{
          color: '#00ff88',
          textAlign: 'center',
          marginTop: '1rem',
          padding: '0.5rem',
          fontSize: '0.9rem'
        }}>
          ¡Gracias por suscribirte! Te notificaremos cuando lancemos la app.
        </div>
      )}
      
      <span className={styles.privacy}>No hacemos spam. Solo contenido útil.</span>
    </section>
  );
} 