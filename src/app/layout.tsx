import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./styles/globals.css";


const inter = Inter({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight : ["300","500","700","800"],
  variable: "--font-plus-jakarta-sans"
});

export const metadata: Metadata = {
  title: "Homepage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className},${plusJakarta.className} bg-[#1b1b1b]`}>
          <main className="min-h-screen">
            {children}
          </main>
        </body>
    </html>
  );
}
