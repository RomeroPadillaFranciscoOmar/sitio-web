import Link from "next/link";
import Image from "next/image";

export default function ConclusionReferences() {
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
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Conclusiones</h2>
        </div>

        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              La legislación informática aborda aspectos cruciales como los
              derechos de autor, que aseguran la protección de las creaciones
              originales y la compensación justa para los autores. La privacidad
              y la protección de datos son esenciales en la era digital para
              prevenir el mal uso y asegurar el manejo responsable de la
              información personal. La comprensión y el cumplimiento de estas
              normativas son fundamentales para la creación y gestión de
              contenido en línea.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Las leyes nacionales e internacionales proporcionan un marco legal
              para la protección de los derechos de autor y la privacidad,
              facilitando un entorno más seguro y justo para creadores y
              usuarios. Los trámites de registro son esenciales para garantizar
              el reconocimiento legal de las obras y el cumplimiento de las
              normativas de protección de datos.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              El conocimiento de las características y aspectos legales de los
              delitos informáticos en México es crucial para entender cómo se
              regula el comportamiento delictivo en el ámbito digital. Además,
              la elaboración de códigos de conducta y ética informática
              proporciona directrices claras para el comportamiento apropiado y
              el manejo de violaciones, promoviendo un entorno de trabajo más
              seguro y ético en el sector tecnológico.
            </p>
          </div>
        </section>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Referencias</h2>
        </div>
        <section className="mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Cesuma. (2023).
              <i>Qué es la protección de los datos personales</i>. Recuperado de
              https://www.cesuma.mx/blog/que-es-la-proteccion-de-los-datos-personales.html
            </li>
            <li>
              Google. (2024). <i>Políticas de privacidad</i>. Recuperado de
              https://support.google.com/legal/answer/3463239?hl=es
            </li>
            <li>
              Gobierno de México. (2024).
              <i>Inscripción de obra literaria o artística</i>. Recuperado de
              https://www.gob.mx/tramites/ficha/inscripcion-de-obra-literaria-o-artistica/INDAUTOR3258
            </li>

            <li>
              Justia. (2024). <i>Delitos informáticos en México</i>. Recuperado
              de https://mexico.justia.com/derecho-penal/delitos-informaticos/
            </li>

            <li>
              Mis Abogados. (2016). <i>Qué es la legislación informática</i>.
              Recuperado de
              https://www.misabogados.com.co/blog/que-es-la-legislacion-informatica
            </li>
            <li>
              Rey Abogado.
              <i>Cómo se castiga el delito informático en México</i>. Recuperado
              de
              https://reyabogado.com/mexico/como-se-castiga-el-delito-informatico-en-mexico/
            </li>
            <li>
              Smowl. (2024). <i>Delitos informáticos</i>. Recuperado de
              https://smowl.net/es/blog/delitos-informaticos/
            </li>
          </ul>
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
