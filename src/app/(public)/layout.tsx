import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>This is public layout.</h1>
      {children}
    </div>
  );
}
