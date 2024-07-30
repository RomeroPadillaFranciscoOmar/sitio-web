import Link from "next/link";
import Image from "next/image";

export default function LegislacionPage() {
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
          <h2 className="text-3xl font-bold mb-4">Legislación Informática</h2>
          <p className="text-lg mb-4">
            Introducción y conceptos clave sobre derechos de autor, privacidad y
            protección de datos.
          </p>
          <div className="relative w-full h-64">
            <Image
              src="/legislacion/legislacion1.jpg"
              alt="Derechos de Autor"
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            Legislación Informática
          </h3>
          <p className="text-lg">
            Se refiere a los acuerdos y las leyes aprobadas qué regulan el uso
            de la información que se encuentra en la internet, dispositivos
            electrónicos y cualquiera de los medios digitales junto con los
            delitos que se cometen por el uso indebido de estos, además, observa
            todo lo relativo a la propiedad intelectual y derechos de autor,
            esto con el fin de resguardar y fortalecer los derechos de autor así
            como la propiedad intelectual y la información que esté en los
            medios digitales disponibles en el mercado
          </p>
        </section>

        <section className="mb-8 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-1 min-w-0 mb-4 lg:mb-0 lg:pr-4">
            <h3 className="text-2xl font-semibold mb-2">Privacidad</h3>
            <p className="text-lg">
              La privacidad es la protección de los datos personales frente a
              quienes no deberían tener acceso a los mismos, y la capacidad de
              los usuarios de determinar quién puede acceder a su información
              personal. En general, la privacidad significa la capacidad de una
              persona para determinar por sí misma cuándo, cómo y hasta qué
              punto se comparte o se comunica a otros su información personal.
              Esta información personal puede ser el nombre, la ubicación, la
              información de contacto o el comportamiento en línea o en el mundo
              real.
            </p>
          </div>

          <div className="flex-1 min-w-0 mb-4 lg:mb-0 lg:pl-4">
            <div className="relative w-full min-w-[300px] h-64">
              <Image
                src="/legislacion/legislacion2.jpeg"
                alt="Privacidad"
                layout="fill"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-8 text-center text-wrap">
          <h3 className="text-2xl font-semibold mb-2">Protección de Datos</h3>
          <p className="text-lg">
            La protección de datos personales se refiere al conjunto de medidas
            y prácticas que tienen como objetivo proteger la privacidad de las
            personas y garantizar que sus datos personales sean utilizados de
            manera responsable y ética. Estos datos incluyen información como
            nombres, direcciones, números de teléfono, direcciones de correo
            electrónico, información financiera y de salud, entre otros
          </p>
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
