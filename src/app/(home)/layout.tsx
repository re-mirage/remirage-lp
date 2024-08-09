import Footer from '@/layouts/home/Footer';
import Navbar from '@/layouts/home/Navbar';
import { ThemeProvider } from '@/theme/theme-provider';
import React from 'react';

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
