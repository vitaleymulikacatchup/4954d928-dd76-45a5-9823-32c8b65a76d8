import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import './globals.css';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoin Pulse",
  description: "Present a playful memecoin concept on a single-page site with clear sections and simple CTAs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
        style={{ background: 'linear-gradient(135deg, #FF4D5A 0%, #7C5CFF 50%, #4DFFB2 100%)' }}
      >
        <NavbarLayoutFloatingOverlay
          navItems={[{ name: "hero", id: "hero" }, { name: "about", id: "about" }, { name: "how-to-buy", id: "how-to-buy" }, { name: "tokenomics", id: "tokenomics" }, { name: "footer", id: "footer" }]}
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          buttonText="Learn More"
          onButtonClick={() => console.log('Button clicked!')}
        />
        {children}
      </body>
    </html>
  );
}
