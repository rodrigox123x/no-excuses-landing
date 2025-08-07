import PolicyLayout from '../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - No Excuses',
  description: 'Información sobre el uso de cookies en No Excuses y cómo gestionarlas.',
};

export default function CookiePolicy() {
  return (
    <PolicyLayout 
      title="Política de Cookies" 
      lastUpdated="Enero 2024"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">¿Qué son las cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
            visitas un sitio web. Nos ayudan a hacer que tu experiencia en No Excuses sea mejor, 
            más rápida y más personalizada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">¿Cómo utilizamos las cookies?</h2>
          <p className="mb-4">
            Utilizamos cookies para varios propósitos en nuestro sitio web:
          </p>
          
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-green-600">🍪 Cookies Esenciales</h3>
              <p className="mb-2">Estas cookies son necesarias para el funcionamiento básico del sitio:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mantener tu sesión activa</li>
                <li>Recordar tu configuración de idioma</li>
                <li>Aplicar tus preferencias de tema (claro/oscuro)</li>
                <li>Funcionalidad básica de navegación</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Estas cookies no se pueden desactivar ya que son necesarias para el funcionamiento del sitio.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-blue-600">📊 Cookies de Análisis</h3>
              <p className="mb-2">Nos ayudan a entender cómo interactúas con nuestro sitio:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Páginas más visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Rutas de navegación</li>
                <li>Errores técnicos</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Utilizamos Google Analytics para estos análisis. Los datos son anónimos.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-purple-600">🎯 Cookies de Marketing</h3>
              <p className="mb-2">Para ofrecerte contenido más relevante:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Recordar tus intereses de fitness</li>
                <li>Personalizar el contenido mostrado</li>
                <li>Mejorar nuestras campañas de marketing</li>
                <li>Evitar mostrarte anuncios irrelevantes</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Puedes optar por no recibir estas cookies sin afectar la funcionalidad básica.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-orange-600">⚙️ Cookies de Funcionalidad</h3>
              <p className="mb-2">Mejoran tu experiencia en el sitio:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Recordar tus preferencias de entrenamiento</li>
                <li>Mantener el estado de formularios</li>
                <li>Personalizar la interfaz según tus gustos</li>
                <li>Funciones de redes sociales integradas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies de terceros</h2>
          <p className="mb-4">
            Algunos de nuestros socios también pueden establecer cookies en tu dispositivo:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Servicio</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Propósito</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Google Analytics</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Análisis de uso del sitio</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">2 años</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">YouTube</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Videos de entrenamientos</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">6 meses</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Facebook Pixel</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Marketing y retargeting</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">90 días</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">¿Cómo gestionar las cookies?</h2>
          
          <h3 className="text-xl font-medium mb-2">En nuestro sitio web:</h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-4">
            <p className="mb-2">
              Puedes gestionar tus preferencias de cookies utilizando nuestro banner de cookies 
              o visitando la configuración de cookies en cualquier momento.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Gestionar Preferencias de Cookies
            </button>
          </div>

          <h3 className="text-xl font-medium mb-2">En tu navegador:</h3>
          <div className="space-y-3">
            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-3 cursor-pointer font-medium">Chrome</summary>
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Ve a Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                  <li>Selecciona "Ver todas las cookies y datos de sitios"</li>
                  <li>Busca "noexcuses.app" y gestiona las cookies</li>
                </ol>
              </div>
            </details>

            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-3 cursor-pointer font-medium">Firefox</summary>
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Ve a Preferencias → Privacidad y seguridad</li>
                  <li>En la sección "Cookies y datos del sitio", haz clic en "Gestionar datos"</li>
                  <li>Busca y gestiona las cookies de noexcuses.app</li>
                </ol>
              </div>
            </details>

            <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-3 cursor-pointer font-medium">Safari</summary>
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Ve a Preferencias → Privacidad</li>
                  <li>Haz clic en "Gestionar datos de sitios web"</li>
                  <li>Busca noexcuses.app y gestiona las cookies</li>
                </ol>
              </div>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Impacto de deshabilitar cookies</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <p className="mb-2 font-medium">⚠️ Si deshabilitas las cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Algunas funciones del sitio pueden no funcionar correctamente</li>
              <li>Tu experiencia puede ser menos personalizada</li>
              <li>Podrías ver contenido menos relevante</li>
              <li>Tendrás que reconfigurar tus preferencias en cada visita</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Actualizaciones de esta política</h2>
          <p className="mb-4">
            Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios 
            en nuestro uso de cookies o por razones legales. Te notificaremos sobre cambios 
            significativos a través de nuestro banner de cookies o por email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre nuestro uso de cookies o esta política:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p><strong>Email:</strong> cookies@noexcuses.app</p>
            <p><strong>Asunto:</strong> "Consulta sobre Cookies"</p>
            <p><strong>Respuesta:</strong> Dentro de 5 días laborables</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
} 