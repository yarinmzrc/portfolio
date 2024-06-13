import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yarin Mizrachi - Frontend Developer",
  description: "A Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-customBlue`}>{children}</body>
    </html>
  );
}
