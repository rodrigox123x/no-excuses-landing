import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No Excuses - App de Productividad y Disciplina Personal",
  description: "Conviértete en la mejor versión de ti mismo. App revolucionaria que te ayuda a dejar atrás la procrastinación con notificaciones motivadoras inteligentes. Bloquea distracciones, controla el tiempo de pantalla y desarrolla disciplina diaria.",
  keywords: "productividad, disciplina, app motivación, bloquear apps, tiempo pantalla, procrastinación, hábitos, autocontrol",
  openGraph: {
    title: "No Excuses - Tu Coach Personal de Disciplina",
    description: "Únete a miles de usuarios que ya transformaron su relación con la tecnología",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Excuses - App de Productividad",
    description: "Deja atrás la procrastinación y conviértete en la mejor versión de ti mismo",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
