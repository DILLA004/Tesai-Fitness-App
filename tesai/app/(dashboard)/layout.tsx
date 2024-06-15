import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ToastContainer } from 'react-toastify';
import React, {Children, ReactNode} from "react";
import Home from "@/app/(dashboard)/(routes)/page";
import {CurrentUserProvider} from "@/app/components/CurrentUserProvider";
import {ExerciseProvider} from "@/app/ExerciseContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tesai - Fitness App",
    description: "Find your greatness",
};
export default async function RootLayout({children}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();

    console.log(currentUser);
    return (
        <html lang="en">
            <body className={inter.className}>
            <ToasterProvider/>
            <ToastContainer
                position="top-right"
                autoClose={5000} // Adjust the duration as needed
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <LoginModal/>
            <RegisterModal/>
            <Navbar currentUser={currentUser}/>
            <CurrentUserProvider currentUser={currentUser}>
                <ExerciseProvider>
                    {children}
                </ExerciseProvider>
            </CurrentUserProvider>
            <Footer/>
            </body>
        </html>
    );

}
