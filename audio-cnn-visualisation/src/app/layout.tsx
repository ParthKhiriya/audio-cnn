import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "AudioCNN",
  description: "Classify and Visualise your Audio files easily",
  icons: [{ rel: "icon", url: "/image.png" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
