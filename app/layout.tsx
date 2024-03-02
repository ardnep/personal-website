import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import classNames from "classnames";
import "./globals.css";

const font = Source_Sans_3({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Aaradh Nepal",
  description: "Aspiring Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(font.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
