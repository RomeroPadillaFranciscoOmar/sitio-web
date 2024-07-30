import Link from "next/link";
import Image from "next/image";

export default function CybercrimeMexico() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4"></div>
        <nav className="bg-gray-800 text-white p-4 flex justify-center flex-wrap">
          <Link href="/" className="hover:underline pr-4">
            Inicio
          </Link>
          <Link href="/legislacion" className="hover:underline px-4">
            Legislación Informática
          </Link>
          <Link href="/leyes" className="hover:underline px-4">
            Leyes y Trámites
          </Link>
          <Link href="/registro" className="hover:underline px-4">
            Registro de Obras
          </Link>
          <Link href="/etica" className="hover:underline px-4">
            Ética Informática
          </Link>
          <Link href="/delitos" className="hover:underline px-4">
            Delitos Informáticos
          </Link>
          <Link
            href="/conclusiones"
            className="hover:underline px-4 whitespace-nowrap"
          >
            Conclusiones y Referencias
          </Link>
        </nav>
      </header>

      <main className="p-6 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Delitos Informáticos en México
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
            Conoce los principales delitos informáticos tipificados en México y
            su impacto legal.
          </p>
        </div>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
            Características de los Delitos Informáticos
          </h3>
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <img
                src="/delitos/delitos1.jpg"
                alt="Delitos Informáticos en México"
                className="object-cover w-full h-full max-h-96 rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                En México, los delitos informáticos se han tipificado en el
                Código Penal Federal y en algunos códigos estatales. Estas
                conductas ilícitas involucran sistemas informáticos,
                electrónicos, Internet, computadoras y programas informáticos.
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>
                    Acceso ilícito a sistemas y equipos de informática:
                  </strong>
                  Se refiere al ingreso no autorizado a sistemas informáticos,
                  redes o dispositivos electrónicos con el propósito de obtener
                  información confidencial o cometer acciones perjudiciales.
                </li>
                <li>
                  <strong>Revelación de secretos:</strong>
                  Consiste en la divulgación no autorizada de información
                  confidencial o secreta, ya sea mediante el acceso indebido a
                  sistemas o la revelación deliberada de datos sensibles.
                </li>
                <li>
                  <strong>Acoso sexual:</strong>
                  Incluye conductas de acoso, hostigamiento o intimidación de
                  naturaleza sexual realizadas a través de medios electrónicos,
                  como el envío de mensajes no deseados o la difusión de
                  contenido sexual sin consentimiento.
                </li>
                <li>
                  <strong>Suplantación de identidad:</strong>
                  Consiste en hacerse pasar por otra persona con el propósito de
                  cometer fraude, obtener información confidencial o realizar
                  acciones ilegales en nombre de la víctima.
                </li>
                <li>
                  <strong>Falsificación de títulos:</strong>
                  Crear documentos falsos utilizando medios electrónicos.
                </li>
                <li>
                  <strong>Engaño telefónico:</strong>
                  Se refiere a la manipulación o el uso fraudulento de
                  comunicaciones telefónicas para cometer estafas, obtener
                  información confidencial o realizar actividades delictivas.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
            Aspectos Legales
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            Los aspectos legales relacionados con los delitos informáticos están
            en constante evolución para adaptarse a las nuevas amenazas. Es
            fundamental estar informado sobre las leyes y regulaciones actuales
            para protegerse adecuadamente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Privacidad y Protección de Datos:</strong> En México, la
                Ley Federal de Protección de Datos Personales en Posesión de
                Particulares regula la recopilación, uso y manejo de datos
                personales por parte de empresas y organizaciones. Establece los
                derechos de los titulares de datos y las obligaciones de quienes
                los procesan.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Seguridad Cibernética:</strong> La Estrategia Nacional
                de Ciberseguridad busca fortalecer la seguridad en línea y
                proteger la infraestructura crítica. Incluye medidas para
                prevenir ataques cibernéticos y promover buenas prácticas.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Firma Electrónica y Certificados Digitales:</strong> La
                Ley de Firma Electrónica Avanzada regula el uso de firmas
                electrónicas y certificados digitales para garantizar la
                autenticidad e integridad de documentos electrónicos.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Derechos de Autor y Propiedad Intelectual:</strong> La
                Ley Federal del Derecho de Autor protege los derechos de los
                creadores y establece las normas para el uso legal de obras
                literarias, artísticas y científicas.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-lg p-6 rounded-lg">
              <img
                src="/delitos/delitos2.jpg"
                alt="Códigos de Conducta y Ética Informática"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <h3 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
            Proceso de elaboración de códigos de conducta y ética informática.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Definir el Propósito y el Alcance
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Propósito:</strong> Establecer por qué se necesita un
                  código de conducta y ética. Ejemplos incluyen promover un
                  ambiente de trabajo positivo, asegurar el cumplimiento de la
                  ley, y proteger la integridad de los datos.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Alcance:</strong> Determinar a quién se aplica el
                  código (empleados, contratistas, usuarios) y en qué contextos
                  (trabajo, uso de sistemas de la empresa, comportamiento en
                  línea).
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Formar un Comité de Ética
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Incluye representantes de diferentes departamentos: IT,
                  recursos humanos, legal, administración.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Asegura la diversidad para cubrir diferentes perspectivas y
                  necesidades.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Recopilar Información
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Investigación:</strong> Revisa códigos de conducta
                  existentes en otras organizaciones y las mejores prácticas de
                  la industria.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Legislación:</strong> Asegúrate de cumplir con las
                  leyes y regulaciones locales, nacionales e internacionales
                  relacionadas con la informática y la privacidad de datos.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Encuestas y Entrevistas:</strong> Consulta a empleados
                  y otras partes interesadas para entender sus preocupaciones y
                  sugerencias.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Redacción del Código
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Valores y Principios:</strong> Define los valores
                  fundamentales (integridad, respeto, transparencia).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Normas de Conducta:</strong> Establece normas claras y
                  específicas sobre el uso adecuado de los sistemas
                  informáticos, la privacidad, la propiedad intelectual, el
                  acoso en línea, etc.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Procedimientos y Consecuencias:</strong> Detalla los
                  procedimientos para reportar violaciones y las consecuencias
                  de no cumplir con el código.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Revisión y Aprobación
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Feedback Interno:</strong> Distribuye un borrador del
                  código para recibir comentarios y sugerencias de empleados y
                  partes interesadas.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Revisión Legal:</strong> Asegúrate de que el código
                  sea revisado por el departamento legal para garantizar su
                  cumplimiento con todas las leyes aplicables.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Aprobación Ejecutiva:</strong> Presenta el código
                  final a la alta dirección para su aprobación.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                6
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Implementación
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Comunicación:</strong> Anuncia el código a toda la
                  organización a través de correos electrónicos, reuniones, y el
                  intranet corporativo.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Capacitación:</strong> Organiza sesiones de
                  capacitación para asegurar que todos entiendan el contenido y
                  la importancia del código.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Acceso:</strong> Asegúrate de que el código esté
                  fácilmente accesible para todos los empleados.
                </p>
              </div>
            </div>

            <div className="flex fustify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 dark:bg-gray-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                7
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Monitoreo y Actualización
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Supervisión Continua:</strong> Establece un comité o
                  una persona responsable de supervisar el cumplimiento del
                  código.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Revisión Periódica:</strong> Revisa y actualiza el
                  código regularmente para reflejar cambios en la legislación,
                  tecnología y el entorno empresarial.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Mecanismo de Reporte:</strong> Implementa un sistema
                  confidencial para que los empleados puedan reportar
                  violaciones del código sin temor a represalias.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
