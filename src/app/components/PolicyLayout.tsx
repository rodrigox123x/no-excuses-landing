import Link from 'next/link';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, children, icon }: PolicyLayoutProps) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
      letterSpacing: '0.01em',
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '56px 16px 32px 16px',
      }}>
        {/* Header */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          {icon && (
            <div style={{
              fontSize: '3.5rem',
              marginBottom: '0.5rem',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.10))',
            }}>{icon}</div>
          )}
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '1rem',
              marginBottom: '1.5rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>←</span>Volver al inicio
          </Link>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '0.5rem',
            color: '#ffffff',
            letterSpacing: '-0.01em',
          }}>{title}</h1>
          <p style={{ color: '#a0a0a0', fontSize: '1.05rem' }}>
            Última actualización: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '22px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 1.5px 8px rgba(0,0,0,0.2)',
          padding: '2.5rem 2rem',
          marginBottom: '2.5rem',
          border: '1.5px solid rgba(255,255,255,0.1)',
          animation: 'fadeInCard 0.7s',
          backdropFilter: 'blur(20px)',
        }}>
          <style>{`
            @keyframes fadeInCard {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .policy-section + .policy-section { border-top: 1.5px solid rgba(255,255,255,0.1); margin-top: 2.5rem; padding-top: 2.5rem; }
            .policy-block {
              background: rgba(255,255,255,0.05);
              border-left: 4px solid #ffffff;
              border-radius: 12px;
              padding: 1.2rem 1.5rem;
              margin: 1.5rem 0;
              color: #ffffff;
              font-weight: 500;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            }
            .policy-list {
              list-style: none;
              padding-left: 0;
            }
            .policy-list li {
              position: relative;
              padding-left: 2rem;
              margin-bottom: 0.7rem;
            }
            .policy-list li:before {
              content: '✔️';
              position: absolute;
              left: 0;
              top: 0.1rem;
              font-size: 1.1rem;
              color: #ffffff;
            }
            @media (max-width: 600px) {
              .policy-section + .policy-section { margin-top: 1.5rem; padding-top: 1.5rem; }
              .policy-block { padding: 1rem 0.7rem; }
            }
          `}</style>
          {children}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '2.5rem',
          paddingTop: '1.5rem',
          borderTop: '1.5px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2rem',
            justifyContent: 'center',
            fontSize: '1rem',
            color: '#ffffff',
            fontWeight: 500,
          }}>
            <Link href="/privacy-policy" style={{ textDecoration: 'none', color: '#ffffff' }}>Política de Privacidad</Link>
            <Link href="/terms" style={{ textDecoration: 'none', color: '#ffffff' }}>Términos y Condiciones</Link>
            <Link href="/cookie-policy" style={{ textDecoration: 'none', color: '#ffffff' }}>Política de Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 