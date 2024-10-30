import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative w-full h-screen overflow-y-auto">
            <div>
              <Navbar />
              <main className="mx-auto flex-grow">{children}</main>
              <footer className="w-full flex items-center justify-center py-3">
                <span className="text-default-400 text-sm">
                  Made with 💻 and ❤️ by Carlota Catot
                </span>
              </footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
