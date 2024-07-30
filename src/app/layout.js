import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sitio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-kalnia-glaze">
        <header className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-end">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
