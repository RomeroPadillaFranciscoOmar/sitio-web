import Link from "next/link";
import Image from "next/image";

export default function Etica() {
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
          <h2 className="text-3xl font-bold mb-4">Ética Informática</h2>
        </div>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                La ética informática se define como la disciplina que
                identifica, analiza la naturaleza y el impacto social de las
                tecnologías de la información y la comunicación en los valores
                humanos y sociales; estos son: salud, riqueza, trabajo,
                libertad, privacidad, seguridad o la autorrealización personal,
                democracia, conocimiento, entre otros. Además, involucra la
                formulación y justificación de políticas para dirigir nuestras
                acciones, y hacer un uso ético de estas tecnologías.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Privacidad: Respetar la información personal y sensible de los
                  individuos.
                </li>
                <li>
                  Seguridad: Proteger los sistemas y datos contra accesos no
                  autorizados y daños.
                </li>
                <li>
                  Precisión: Asegurar la veracidad y exactitud de la información
                  procesada y almacenada.
                </li>
                <li>
                  Propiedad: Reconocer y respetar los derechos de propiedad
                  intelectual y uso de la información.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="/etica/etica1.jpg"
                alt="Ética Informática"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Delitos Informáticos</h2>
          <p className="text-lg mb-4">
            Una visión general de los delitos informáticos y su impacto en la
            sociedad.
          </p>
        </div>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">
                Conceptos de Delitos Informáticos
              </h3>
              <p className="text-lg mb-4">
                Los delitos informáticos, también conocidos como ciberdelitos,
                son actos ilegales que se cometen utilizando sistemas
                informáticos o redes de comunicación. Estos delitos pueden tener
                graves consecuencias tanto para individuos como para
                organizaciones.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Phishing: Obtención fraudulenta de información personal
                  mediante engaños.
                </li>
                <li>
                  Malware: Software malicioso diseñado para dañar o infiltrarse
                  en sistemas informáticos.
                </li>
                <li>
                  Ransomware: Software que secuestra los datos de una víctima y
                  pide un rescate para liberarlos.
                </li>
                <li>
                  Hacking: Acceso no autorizado a sistemas informáticos para
                  robar o manipular información.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="/etica/etica2.jpeg"
                alt="Delitos Informáticos"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
