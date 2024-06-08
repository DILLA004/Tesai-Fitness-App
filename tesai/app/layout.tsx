import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Modal from "@/app/components/modals/Modal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tesai - Fitness App",
    description: "Find your greatness",
};
export default function RootLayout({children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToasterProvider/>
                <RegisterModal/>
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
