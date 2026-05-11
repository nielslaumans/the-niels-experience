import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niels Laumans — Live Experience Captain @ Livewall",
  description:
    "Een cinematische sollicitatie van Niels Laumans voor de rol Live Experience Captain bij Livewall. Duik mee de oceaan in.",
  openGraph: {
    title: "Niels Laumans · Duik mee",
    description:
      "Geen pitch deck. Een onderwater experience. Sollicitatie voor Live Experience Captain bij Livewall.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ocean-abyss text-white antialiased selection:bg-bio-cyan selection:text-ocean-abyss">
        {children}
      </body>
    </html>
  );
}
