"use client";

import {SafeUser} from "@/app/types";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

interface HeartButtonProps {
    exerciseId: string;
    currentUser?: SafeUser | null;
}

const HeartButton:React.FC<HeartButtonProps> = ({
    exerciseId,
    currentUser
}) => {
    const hasFavorited = true;
    const toggleFavorite = () => {};

    return (
        <div
            onClick={toggleFavorite}
            className="relative hover:opacity-60 transition cursor-pointer">
                <AiOutlineHeart
                    size={28} className="fill-neutral-400 absolute -top-[2px] -right-[2px]"/>
                <AiFillHeart
                size={24} className={
                    hasFavorited ? 'fill-black' : 'fill-neutral-500/60'
                }/>
        </div>
    )
}

export default HeartButton;