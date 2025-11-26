import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "RAGSAN Renewable Energy Systems - Güneş Panelleri ve Rüzgar Türbinleri",
  description: "Yenilenebilir enerji çözümleri. Güneş panelleri ve rüzgar türbinleri ile sürdürülebilir gelecek.",
  keywords: "güneş paneli, rüzgar türbini, yenilenebilir enerji, solar panel, wind turbine, RAGSAN",
  icons: {
    icon: [
      { url: '/favicon.png?v=2', type: 'image/png' },
      { url: '/icon.png?v=2', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/icon.png?v=2', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

