'use client';

import {SafeUser} from "@/app/types";
import React from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import HeartButton from "@/app/components/HeartButton";


interface ExerciseCardProps {
    data: any;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const ExerciseCard:React.FC<ExerciseCardProps> = ({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId,
    currentUser
}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/exercises/${data.id}`)}
             className="
        col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image fill src={data.gifUrl} alt="Exercise"
                        className="object-cover h-full w-full group-hover:scale-110 transition"/>
                    <div className="absolute top-3 right-3">
                        <HeartButton
                            exerciseId={data.id}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ExerciseCard;