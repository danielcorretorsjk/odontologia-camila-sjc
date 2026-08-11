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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500;600&family=Outfit:wght@300;400;500&display=swap"
        />
      </head>
      <body style={{ backgroundColor: '#F4EFE6', color: '#1B2921', fontFamily: "'Instrument Sans', sans-serif", margin: 0, padding: 0, lineHeight: 1.6 }}>
        {children}
      </body>
    </html>
  );
}
