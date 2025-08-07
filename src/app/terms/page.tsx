import PolicyLayout from '../components/PolicyLayout';
import type { Metadata } from 'next';
import { FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - No Excuses',
  description: 'Lee los términos y condiciones de uso de la plataforma No Excuses.',
};

export default function Terms() {
  return (
    <PolicyLayout 
      title="Términos y Condiciones" 
      lastUpdated="Enero 2024"
      icon={<FaShieldAlt />}
    >
      <div>
        <section className="policy-section">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar el sitio web y servicios de No Excuses ("nosotros", "nuestro" o "la aplicación"), 
            aceptas estar sujeto a estos Términos y Condiciones ("Términos"). Si no estás de acuerdo con 
            alguna parte de estos términos, no puedes acceder al servicio.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Descripción del servicio</h2>
          <p>No Excuses es una plataforma de fitness y motivación que proporciona:</p>
          <ul className="policy-list">
            <li>Contenido motivacional y educativo sobre fitness</li>
            <li>Rutinas de ejercicio y planes de entrenamiento</li>
            <li>Herramientas de seguimiento de progreso</li>
            <li>Comunidad de apoyo y motivación</li>
            <li>Servicios de coaching personalizado (próximamente)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Registro y cuentas de usuario</h2>
          <h3>Elegibilidad:</h3>
          <p>
            Debes tener al menos 16 años para usar nuestros servicios. Si eres menor de 18 años, 
            necesitas el consentimiento de tus padres o tutores.
          </p>
          <h3>Responsabilidad de la cuenta:</h3>
          <ul className="policy-list">
            <li>Eres responsable de mantener la confidencialidad de tu cuenta</li>
            <li>Debes proporcionar información precisa y actualizada</li>
            <li>Notificarás inmediatamente cualquier uso no autorizado de tu cuenta</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Uso aceptable</h2>
          <h3>Está permitido:</h3>
          <ul className="policy-list">
            <li>Usar la aplicación para fines personales de fitness y salud</li>
            <li>Compartir tu progreso y motivar a otros usuarios</li>
            <li>Proporcionar feedback constructivo</li>
          </ul>
          <h3 style={{marginTop: '1.2rem'}}>Está prohibido:</h3>
          <ul className="policy-list">
            <li>Usar la aplicación para fines comerciales sin autorización</li>
            <li>Compartir contenido ofensivo, discriminatorio o inapropiado</li>
            <li>Intentar acceder a cuentas de otros usuarios</li>
            <li>Interferir con el funcionamiento de la aplicación</li>
            <li>Proporcionar consejos médicos sin las credenciales apropiadas</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Contenido y propiedad intelectual</h2>
          <h3>Nuestro contenido:</h3>
          <p>
            Todo el contenido proporcionado por No Excuses, incluyendo textos, gráficos, videos, 
            rutinas y planes de entrenamiento, está protegido por derechos de autor y otros 
            derechos de propiedad intelectual.
          </p>
          <h3>Tu contenido:</h3>
          <p>
            Al compartir contenido en nuestra plataforma, nos otorgas una licencia no exclusiva 
            para usar, modificar y mostrar dicho contenido en relación con nuestros servicios.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Descargo de responsabilidad médica</h2>
          <div className="policy-block">
            ⚠️ <b>IMPORTANTE:</b> No Excuses no proporciona consejo médico profesional.<br/>
            <ul className="policy-list" style={{marginTop: '0.7rem'}}>
              <li>Consulta siempre con un profesional de la salud antes de comenzar cualquier programa de ejercicio</li>
              <li>Los consejos y rutinas son solo para fines informativos y educativos</li>
              <li>No somos responsables de lesiones o problemas de salud derivados del uso de la aplicación</li>
              <li>Si experimentas dolor o malestar, detén el ejercicio inmediatamente</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>7. Limitación de responsabilidad</h2>
          <p>En la máxima medida permitida por la ley, No Excuses no será responsable de:</p>
          <ul className="policy-list">
            <li>Daños directos, indirectos, incidentales o consecuentes</li>
            <li>Pérdida de datos o interrupciones del servicio</li>
            <li>Resultados de fitness o pérdida de peso</li>
            <li>Lesiones físicas o problemas de salud</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Suspensión y terminación</h2>
          <p>Nos reservamos el derecho de suspender o terminar tu acceso al servicio en caso de:</p>
          <ul className="policy-list">
            <li>Violación de estos términos</li>
            <li>Uso fraudulento o abusivo del servicio</li>
            <li>Solicitud del usuario</li>
            <li>Requerimientos legales</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. Modificaciones</h2>
          <p>
            Podemos modificar estos términos en cualquier momento. Los cambios significativos 
            serán notificados con al menos 30 días de anticipación. El uso continuado del 
            servicio después de los cambios constituye tu aceptación de los nuevos términos.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta 
            en los tribunales competentes de España.
          </p>
        </section>

        <section className="policy-section">
          <h2>11. Contacto</h2>
          <div className="policy-block">
            Para preguntas sobre estos términos o para reportar violaciones:<br/>
            <b>Email:</b> legal@noexcuses.app<br/>
            <b>Respuesta:</b> Dentro de 7 días laborables
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
} 