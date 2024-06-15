"use client";

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
};

const Avatar:React.FC<AvatarProps> = ({
    src
}) =>{
    return (
        <Image className="rounded-full"
        height="36"
        width="36"
        alt="Avatar"
        src={src || "/images/orangeUser.png"}/>
    );
}

export default Avatar;