import Link from "next/link";
import Image from "next/image";

export default function RegistroPage() {
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
          <h2 className="text-3xl font-bold mb-4">
            Trámites y Requisitos de Registro de Obras
          </h2>
          <p className="text-lg mb-4">
            Proceso y requisitos necesarios para registrar una obra ante la
            institución de derechos de autor.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Documentos Necesarios</h3>
          <p className="text-lg mb-4">
            Los documentos necesarios para realizar el registro de una obra son
            los siguientes:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Acta constitutiva documento que acredite la existencia de la
                    persona moral
                  </td>
                  <td className="py-2 px-4 text-left">Original y Copia</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Documento que acredite la personalidad del representante
                    legal
                  </td>
                  <td className="py-2 px-4 text-left">Original y Copia</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Identificación oficial del mandante, mandatario y testigos
                    (en caso de que se presente carta poder)
                  </td>
                  <td className="py-2 px-4 text-left">Original y Copia</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Comprobante de pago de derechos
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Traducción al español de los documentos que se acompañan en
                    idioma distinto
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Dos ejemplares de la obra, identificados con el nombre del
                    autor y título
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Documento que acredite la titularidad de los derechos
                    patrimoniales sobre la obra
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Sobres cerrados con los datos de identificación del autor
                    (en caso de ser una obra creada bajo seudónimo)
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    En caso de un sólo autor presentar la Solicitud de Registro
                    de Obra RPDA-01
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    En caso de más de un autor, titular, editor y/o productor,
                    adicionar RPDA-01-A1
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    En caso de registrar obra que derive de más de una obra
                    primigenia presentar adicionalmente la Solicitud de Registro
                    de Obras RPDA-01-A2 (hoja adjunta de obras)
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-left font-semibold">
                    Para registro de fonograma o edición de libro presentar
                    RPDA-02 Solicitud de Registro de Derechos Conexos
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-left font-semibold">
                    Para enlistar las canciones presentar RPDA-02-A1 Solicitud
                    Específica para videograma, fonograma, edición de libro
                  </td>
                  <td className="py-2 px-4 text-left">Original</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            Opciones para Realizar el Trámite
          </h3>
          <p className="text-lg">
            Puedes realizar el trámite de registro de tus obras de las
            siguientes maneras:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>En línea:</strong> Puedes hacerlo a través del portal de
              INDAUTOR.
            </li>
            <li>
              <strong>Presencial:</strong> Acude a la Dirección del Registro
              Público del Derecho de Autor, ubicada en Puebla # 143, Planta
              Baja, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de
              México con un horario de atención de lunes a viernes de 9:30 a
              14:00 horas.
            </li>
            <li>
              <strong>Express Autor:</strong> Acude a la Dirección del Registro
              Público del Derecho de Autor, ubicada en Puebla # 143, Planta
              Baja, Col. Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de
              México con un horario de atención de lunes a viernes de 9:30 a
              11:00 horas, para recoger tu certificado de registro a partir de
              las 13:00 horas. Si lo ingresas entre las 11:01 y 13:00 horas,
              deberás recogerlo entre las 14:00 y 15:00 horas del mismo día, en
              caso contrario y por disposición oficial, se remitirá a su plazo
              normal de entrega de 15 días hábiles.
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
