"use client";

import {SafeUser} from "@/app/types";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import useFavorite from "@/app/hooks/useFavorite";

interface HeartButtonProps {
    exerciseId: string;
    currentUser?: SafeUser | null;
}

const HeartButton:React.FC<HeartButtonProps> = ({
    exerciseId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        exerciseId,
        currentUser
    });

    return (
        <div
            onClick={toggleFavorite}
            className="relative hover:opacity-60 transition cursor-pointer">
                <FaRegHeart
                    size={28} className="fill-[#FF4400] absolute -top-[2px] -right-[2px]"/>
                <FaHeart size={24} className={
                    hasFavorited ? 'fill-[#FF4400]' : 'fill-white'
                }/>
        </div>
    )
}

export default HeartButton;