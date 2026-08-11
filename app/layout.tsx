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
      <body>{children}</body>
    </html>
  );
}
