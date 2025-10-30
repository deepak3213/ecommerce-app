import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
