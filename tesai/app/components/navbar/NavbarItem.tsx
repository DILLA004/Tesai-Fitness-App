
'use client';

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

interface NavbarItemProps {
    // onClick: () => void;
    label: string;
    href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
                                                   // onClick,
                                                   label,
                                                   href,
                                               }) => {
    const pathName = usePathname();
    const router = useRouter();


    const isActive =
        (pathName === "/" && href === "/") ||
        pathName === href ||
        pathName?.startsWith(`${href}/`);

    const onClick = () => {
        sessionStorage.setItem('exercises', JSON.stringify(''));
        router.push(href);
    }
    return (
        <div
            onClick={onClick}
            className={`text-sm
                font-semibold
                ${isActive && 'text-white'}
                px-2
                text-white`}>

            {label}
        </div>
    );
}

export default NavbarItem;