import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Configuramos las fuentes para que la web se vea moderna
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Esta es la información que verán los buscadores (SEO)
export const metadata = {
  title: "HSG | Especialistas en Moldajes Monolíticos",
  description: "Subcontrato de mano de obra especializada en Chile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {/* El Navbar estará presente en todas las páginas */}
        <Navbar />
        {/* El main contiene el contenido de cada página individual */}
        <main className="pt-20"> 
          {children}
        </main>
      <Footer />
      <WhatsAppButton />
      </body>
    </html>
  );
}