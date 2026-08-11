import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Camila Ferreira | Odontologia — São José dos Campos",
  description:
    "Clínica odontológica especializada em estética, implantes e harmonização facial em Monte Castelo, São José dos Campos. Atendimento humanizado, tecnologia de ponta.",
  keywords: [
    "dentista São José dos Campos",
    "odonto SJC",
    "implantes dentários",
    "clareamento dental",
    "harmonização facial",
    "ortodontia",
    "Dra. Camila Ferreira",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500;600&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
