import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Ticto | Dashboard Financeiro",
  description: "Desenvolvido por Lucas de Moraes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <Toaster position="bottom-right" richColors/>
        {children}
      </body>
    </html>
  );
}
