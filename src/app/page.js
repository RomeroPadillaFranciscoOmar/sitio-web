import Image from "next/image";
import Link from "next/link";

export default function Portada() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 relative">
      <nav className="bg-gray-800 text-white p-4 flex justify-center flex-wrap ">
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
        <Link href="/conclusiones" className="hover:underline px-4">
          Conclusiones y Referencias
        </Link>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 relative p-4">
        <div className="absolute top-4 left-4">
          <Image
            src="/imagenes-logos/logo1.jpg"
            alt="Logo 1"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute top-4 right-4">
          <Image
            src="/imagenes-logos/logo2.png"
            alt="Logo 2"
            width={100}
            height={100}
          />
        </div>

        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">CARRERA:</h1>
          <h1 className="text-4xl font-bold">INGENIERÍA EN SOFTWARE</h1>
          <h2 className="text-2xl font-bold">MATERIA:</h2>
          <h2 className=" text-2xl">SEGURIDAD DE LA INFORMACION</h2>
          <h2 className="text-2xl font-bold ">GRUPO:</h2>
          <h2 className="text-2xl">3924-IS</h2>
          <h2 className="text-2xl font-bold">EVIDENCIA:</h2>
          <h2 className="text-2xl">SITIO WEB</h2>
          <h2 className="text-2xl font-bold">PROFESOR:</h2>
          <h2 className="text-2xl">NESTOR APOLO LOPEZ GONZALEZ</h2>
          <h2 className="text-2xl font-bold">ALUMNO:</h2>
          <h2 className="text-2xl">ROMERO PADILLA FRANCISCO OMAR</h2>
          <h2 className="text-2xl font-bold">MATRÍCULA:</h2>
          <h2 className="text-2xl">1321124145</h2>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
