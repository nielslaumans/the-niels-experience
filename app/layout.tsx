import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Niels Experience — Live Experience Captain @ Livewall",
  description:
    "An interactive application by Niels Laumans for the Live Experience Captain role at Livewall. Event energy. Creative execution. Live moments that stick.",
  openGraph: {
    title: "The Niels Experience",
    description:
      "Event energy. Creative execution. Live moments that stick. An interactive application for Livewall.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body className="bg-stage-950 text-white antialiased selection:bg-neon-pink selection:text-white">
        {children}
      </body>
    </html>
  );
}
