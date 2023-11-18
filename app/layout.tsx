import { PropsWithChildren } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rahi Khan | Web Developer",
    description: "Web Developer"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="scroll-smooth">
        <body className="bg-black text-white">{children}</body>
    </html>
);

export default RootLayout;
