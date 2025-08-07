import PolicyLayout from '../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - No Excuses',
  description: 'Conoce cómo protegemos y manejamos tu información personal en No Excuses.',
};

export default function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Política de Privacidad" 
      lastUpdated="Enero 2024"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
          <p className="mb-4">
            En No Excuses, respetamos tu privacidad y nos comprometemos a proteger la información 
            personal que compartes con nosotros. Esta política describe qué información recopilamos 
            y cómo la utilizamos.
          </p>
          <h3 className="text-xl font-medium mb-2">Información proporcionada voluntariamente:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dirección de correo electrónico cuando te suscribes a nuestro newsletter</li>
            <li>Información de contacto cuando nos escribes</li>
            <li>Comentarios y feedback que compartes con nosotros</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Cómo utilizamos tu información</h2>
          <p className="mb-4">Utilizamos la información recopilada para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enviarte contenido relevante sobre fitness y motivación</li>
            <li>Notificarte sobre el lanzamiento de nuestra aplicación</li>
            <li>Responder a tus consultas y proporcionar soporte</li>
            <li>Mejorar nuestros servicios y contenido</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Compartir información</h2>
          <p className="mb-4">
            No vendemos, intercambiamos ni transferimos tu información personal a terceros sin 
            tu consentimiento, excepto en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proveedores de servicios que nos ayudan a operar nuestro sitio web</li>
            <li>Cuando sea requerido por ley</li>
            <li>Para proteger nuestros derechos o la seguridad de otros usuarios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Cookies y tecnologías similares</h2>
          <p className="mb-4">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro 
            sitio web. Puedes controlar el uso de cookies a través de la configuración de tu 
            navegador. Para más información, consulta nuestra Política de Cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Seguridad de los datos</h2>
          <p className="mb-4">
            Implementamos medidas de seguridad apropiadas para proteger tu información personal 
            contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, 
            ningún método de transmisión por internet es 100% seguro.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Tus derechos</h2>
          <p className="mb-4">Tienes derecho a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Acceder a la información personal que tenemos sobre ti</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tu información personal</li>
            <li>Oponerte al procesamiento de tu información</li>
            <li>Retirar tu consentimiento en cualquier momento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Retención de datos</h2>
          <p className="mb-4">
            Conservamos tu información personal solo durante el tiempo necesario para cumplir 
            con los propósitos descritos en esta política, a menos que se requiera un período 
            de retención más largo por ley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Cambios en esta política</h2>
          <p className="mb-4">
            Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos 
            sobre cambios significativos publicando la nueva política en esta página y 
            actualizando la fecha de "última actualización".
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre esta Política de Privacidad o quieres ejercer tus derechos, 
            puedes contactarnos en:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p><strong>Email:</strong> privacy@noexcuses.app</p>
            <p><strong>Respuesta:</strong> Dentro de 30 días</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
} 