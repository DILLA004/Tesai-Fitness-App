"use client";
import NavbarItem from "@/app/components/navbar/NavbarItem";

const userRoutes = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "EXERCISES",
        href: "/exercises"
    },
    {
        label: "WORKOUTS",
        href: "/workouts"
    },
    {
        label: "TRAINERS",
        href: "/trainers"
    },
];
const NavbarRoutes = () => {
    const routes = userRoutes;
    return (
        <div
            className="
            flex
            w-full
            md:w-auto
            py-2
            transition
            cursor-pointer">
            <div className="
                links
                flex
                flex-row
                items-center
                space-x-4
                justify-between">
                {routes.map((route) => (
                    <NavbarItem
                        key={route.href}
                        label={route.label}
                        href={route.href}
                    />
                ))}
            </div>
        </div>
    );

}

export default NavbarRoutes;