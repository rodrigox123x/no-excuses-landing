import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
