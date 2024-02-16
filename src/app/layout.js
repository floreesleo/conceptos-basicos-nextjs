import Navbar from "../components/Navbar.jsx";
import { Outfit } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "floreesleo",
  description: "Esta es la página principal de mi tienda",
};

const outfit = Outfit({
  weight: ["200", "400", "600"],
  styles: ["italic", "bold"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
