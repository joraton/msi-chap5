import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modélisation du SI - Cours DSCG",
  description: "Cours complet sur la modélisation des systèmes d'information : cartographies métier, applicative et infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
