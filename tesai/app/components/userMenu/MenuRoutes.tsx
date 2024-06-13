"use client";

import MenuItem from "@/app/components/userMenu/MenuItem";
import {signOut} from "next-auth/react";
const userRoutes = [
    {
        label: "PROFILE",
        href: "/",
    },
    {
        label: "TRAINING",
        href: "/exercises"
    },
    {
        label: "FAVOURITE",
        href: "/workouts"
    },
];
const MenuRoutes = () => {
    const routes = userRoutes;
    return (
        <div className="
                absolute
                rounded-xl
                shadow-md
                w-[30vw]
                md:w-3/4
                bg-transparent
                overflow-hidden
                right-6
                top-12

                text-sm">
            <>
                {routes.map((route) => (
                    <MenuItem
                        key={route.href}
                        label={route.label}
                        href={route.href}
                        />
                ))}
                <MenuItem
                    key="/"
                    label="LOGOUT"
                    href="/"
                    onClickSecond={() => signOut()}
                    />
            </>
        </div>
    );

}

export default MenuRoutes;