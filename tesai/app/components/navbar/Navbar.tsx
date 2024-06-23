"use client"
import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import UserMenu from "@/app/components/userMenu/UserMenu";
import {SafeUser} from "@/app/types";
import NavbarRoutes from "@/app/components/navbar/NavbarRoutes";
import {useEffect, useState} from "react";

interface NavbarProps {
    currentUser?: SafeUser | null;
}


const Navbar:React.FC<NavbarProps> = ({
    currentUser
})=>{
    return (
        <div className="fixed w-full z-10 bg-gradient-to-b from-[#161616]/70 to-transparent">
            <div className="py-4">
                <Container>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-2
                    md:gap-0">
                        <div className="pl-16">
                            <Logo/>
                        </div>
                        <NavbarRoutes/>
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;