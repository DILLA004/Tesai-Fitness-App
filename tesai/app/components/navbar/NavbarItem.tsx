
'use client';

import {usePathname, useRouter} from "next/navigation";

interface NavbarItemProps {
    // onClick: () => void;
    label: string;
    href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
                                                   // onClick,
                                                   label,
                                                   href
                                               }) => {
    const pathName = usePathname();
    const router = useRouter();

    const isActive =
        (pathName === "/" && href === "/") ||
        pathName === href ||
        pathName?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }
    return (
        <div
            onClick={onClick}
            className="text-sm
                font-semibold
                px-2
                text-white">

            {label}
        </div>
    );
}

export default NavbarItem;