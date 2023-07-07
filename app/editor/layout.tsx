import { Rail } from "@/components/Rail";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Rail />
      <Sidebar />
      <div className="grow"> {children}</div>
    </div>
  );
}
