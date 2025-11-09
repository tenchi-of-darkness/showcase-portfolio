import type {Metadata} from "next";
import {Noto_Sans, Noto_Sans_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {Icon} from "@iconify/react";
import NavBar from "@/components/nav-bar";

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
    variable: "--font-noto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio Melanie",
    description: "This is my personal portfolio with information about my projects, experience, skills and interests",
    keywords: ["Portfolio", "Software", "Development"],
    authors: {
        name: "Melanie van de Graaf",
    }
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${notoSans.variable} ${notoSansMono.variable} antialiased bg-background text-foreground font-sans`}
        >
        <NavBar/>
        {children}
        <footer className={"flex flex-col items-center mb-10"} id={"contact"}>
            <h1 className={"font-bold text-5xl text-center mt-12 w-fit mb-6"}>Contact me via</h1>
            <div className={"flex flex-row justify-center"}>
                <a href="https://github.com/tenchi-of-darkness" target={"_blank"}
                   className={"px-0.5 hover:bg-transparent text-secondary"}>
                    <Icon className={"text-secondary size-8"} icon="line-md:github-twotone"/>
                </a>
                <a href="https://www.linkedin.com/in/melanie-van-de-graaf/" target={"_blank"}
                   className={"px-0.5 hover:bg-transparent text-secondary"}>
                    <Icon className={"text-secondary size-8"} icon="line-md:linkedin"/>
                </a>
            </div>
        </footer>
        </body>
        </html>
    );
}
