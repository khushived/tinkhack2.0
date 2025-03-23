import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DashboardNav } from "@/components/DashboardNav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CrowdRoute",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <aside className="fixed top-0 z-30 hidden h-screen w-full shrink-0 border-r md:sticky md:block">
              <div className="flex h-full flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <span className="font-semibold">Logistics Dashboard</span>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <DashboardNav />
                </div>
              </div>
            </aside>
            <main className="flex w-full flex-col overflow-hidden">
              {children}
            </main>
          </div>
        </div> 
      </body>
    </html>
  );
}
