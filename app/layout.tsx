import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { PlausibleAnalytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: "Prudhvi Nikku - Software Engineer",
  description: "Software Engineer specializing in distributed systems, backend development, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <PlausibleAnalytics />
      </body>
    </html>
  );
}
