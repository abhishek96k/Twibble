import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twibble: Connect, Share, and Discover",
  description:
    "Welcome to Twibble, the vibrant social platform where your voice matters! Share your thoughts, connect with friends, and discover trending content. Whether you’re following the latest news, engaging in lively discussions, or simply sharing a moment from your day, Twibble makes it easy and fun. Join our community and start Twibbling today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
