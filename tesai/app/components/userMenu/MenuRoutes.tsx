"use client";

import MenuItem from "@/app/components/userMenu/MenuItem";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
const userRoutes = [
    {
        label: "PROFILE",
        href: "/profile",
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
    const handleSignOut = async () => {
        await signOut({ callbackUrl: window.location.pathname }); // Redirect to current path after sign out
    };

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
                    href={window.location.pathname}
                    onClickSecond={handleSignOut}
                    />
            </>
        </div>
    );

}

export default MenuRoutes;