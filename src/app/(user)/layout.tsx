import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-yellow-500">
      <h1>This is me! fuck up!</h1>
      {children}
    </div>
  );
}
