import Header from "@/components/header/Header";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-yellow-500 p-0 m-0">
      <Header />
      {children}
    </main>
  );
}
