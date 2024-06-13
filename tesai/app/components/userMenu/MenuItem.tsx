'use client';

import {usePathname, useRouter} from "next/navigation";

interface MenuItemProps {
    onClick?: () => void;
    onClickSecond?: () => void;
    label: string;
    href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
                                                    onClickSecond,
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
        if (onClickSecond) {
            onClickSecond();
        }
        router.push(href);
    }
    return (
        <div
            onClick={onClick}
            className="px-4 py-3 hover:bg-[#FF4400] cursor-pointer transition font-semibold">

            {label}
        </div>
    );
}

export default MenuItem;