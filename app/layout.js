import Appshell from "@/components/layouts/Appshell";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Appshell>{children}</Appshell>
      </body>
    </html>
  );
}
