import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="944203748810-qg4v1hj5tlcftcm1b149k5it6a7j8aqi.apps.googleusercontent.com">
          {children}
          <Toaster />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
