import "@astratask/ui/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider as AnalyticsProvider } from "@astratask/analytics/client";
import { cn } from "@astratask/ui/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astratask.com"),
  title: "AstraTask - AI-Powered Task Management for Freelancers and Small Teams",
  description:
    "AstraTask helps freelancers and small teams manage tasks, track deadlines, and automate invoicing using AI-powered tools. Organize your work and boost productivity effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${DepartureMono.variable} ${GeistSans.variable} ${GeistMono.variable}`,
          "antialiased dark",
        )}
      >
        <Header />
        {children}
        {/* <Footer /> */}

        <AnalyticsProvider />
      </body>
    </html>
  );
}
