import { Messenger } from "@/components/messenger";
import { TopNav } from "@/components/navigation/topNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <div className="pt-16">{children}</div>
        <Messenger />
      </body>
    </html>
  );
}
