import Link from "next/link";
import Image from "next/image";

export default function LawsPage() {
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
          <h2 className="text-3xl font-bold mb-4">Leyes nacionales</h2>
          <p className="text-lg mb-4">
            En México, existen leyes que protegen los derechos de autor, la
            privacidad y los datos personales. A continuación, se describe
            información sobre algunas de ellas.
          </p>
        </div>

        <section className="mb-8">
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <strong>
                  Ley General de Protección de Datos Personales en Posesión de
                  Sujetos Obligados (LGPDPPSO):
                </strong>
                <p className="mt-2">
                  Esta ley regula la protección de datos personales en posesión
                  de entidades gubernamentales y otras organizaciones. Establece
                  principios, procedimientos y bases para garantizar el derecho
                  a la protección de datos.
                </p>
              </div>
              <div className="relative w-full md:w-1/2 h-64">
                <Image
                  src="/leyes/leyes1.jpg"
                  alt="Imagen representativa"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </li>

            <li className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-1/2 h-64">
                <Image
                  src="/leyes/leyes2.jpg"
                  alt="Imagen representativa"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <strong>
                  Ley Federal de Protección de Datos Personales en Posesión de
                  los Particulares (LFPDPPP):
                </strong>
                <p className="mt-2">
                  Esta ley se aplica a particulares y empresas. Define cómo
                  deben tratarse los datos personales y establece los derechos
                  de los titulares de esos datos.
                </p>
              </div>
            </li>

            <li>
              <strong>Ley Federal del Derecho de Autor:</strong>
              Esta ley protege los derechos de autor y regula la propiedad
              intelectual en México. Asegura que los creadores reciban un trato
              justo y compensación por su trabajo.
            </li>
          </ul>
        </section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Leyes Internacionales</h2>
        </div>

        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-6">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">
                  Derecho a la Privacidad
                </h4>
                <p className="text-lg">
                  La Declaración Universal de Derechos Humanos (artículo 12) y
                  el Pacto Internacional de Derechos Civiles y Políticos
                  (artículo 17) garantizan que nadie sufra injerencias
                  arbitrarias en su vida privada, familia o correspondencia.
                  Cada caso de intromisión debe ser legal, necesario y
                  proporcional. Resoluciones de la Asamblea General de las
                  Naciones Unidas y el Consejo de Derechos Humanos han abordado
                  el derecho a la privacidad en la era digital, enfatizando la
                  protección en Internet y el impacto de tecnologías emergentes.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-6">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">
                  Derechos de Autor
                </h4>
                <p className="text-lg">
                  El Convenio de Berna y la Convención de Ginebra y París son
                  tratados clave que rigen los derechos de autor a nivel
                  internacional. Además, el Tratado de la OMPI sobre Derecho de
                  Autor (WCT) y el Acuerdo sobre los Aspectos de los Derechos de
                  Propiedad Intelectual (ADPIC) también abordan cuestiones de
                  propiedad intelectual y derechos de autor.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-6">
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2">
                  Principios Actualizados sobre la Privacidad y la Protección de
                  Datos
                </h4>
                <p className="text-lg">
                  Estos principios, promovidos por la Organización de los
                  Estados Americanos (OEA), defienden la autodeterminación en la
                  información, la ausencia de restricciones arbitrarias y la
                  protección de la privacidad y la reputación.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Trámites y Requisitos de Registro de Obras
          </h2>
          <p className="text-lg mb-4">
            Proceso y requisitos necesarios para registrar una obra ante la
            institución de derechos de autor.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Requisitos</h3>
          <p className="text-lg">
            Para registrar tus obras literarias o artísticas en México, debes
            cumplir con los siguientes requisitos:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              Ser el autor o titular de los derechos de autor de las obras que
              deseas registrar.
            </li>
            <li>Contar con una cuenta en el RPDA de INDAUTOR.</li>
            <li>
              Proporcionar la información completa y exacta de cada una de tus
              obras.
            </li>
            <li>
              Adjuntar una copia digital de cada obra, siguiendo los formatos y
              requerimientos establecidos por INDAUTOR.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Costos</h3>
          <p className="text-lg">
            Los costos para registrar tus obras son los siguientes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              Obra literaria o artística, obra derivada o versión: $338.00 MXN.
            </li>
            <li>
              Características gráficas y distintivas de cada obra: $338.00 MXN.
            </li>
            <li>Fonograma, videograma o libro: $338.00 MXN.</li>
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
