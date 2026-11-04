import type { Metadata, Viewport } from "next";
import { Poppins, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const display = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const body = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const description =
  "Tomás Lopes is a software engineer from Portugal: backend at Blip with Java, Scala and Kafka, fullstack on his own projects and a guest assistant professor at ISEP.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomasflopes.github.io"),
  title: "Tomás Lopes",
  description,
  openGraph: {
    title: "Tomás Lopes",
    description,
    url: "/",
    images: ["/tomas.jpg"],
    type: "profile",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6f0" },
    { media: "(prefers-color-scheme: dark)", color: "#131110" },
  ],
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
