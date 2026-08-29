import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MineSlot — Elige tu juego",
  description: "Modern gaming landing page",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
