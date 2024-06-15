"use client";

import {Exercise} from "@prisma/client";
import {SafeUser} from "@/app/types";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import {Inter} from "next/font/google";

interface ExerciseClientProps {
    exercise: any & {
        user: SafeUser
    };
    currentUser: SafeUser | null;
}

const ExerciseClient:React.FC<ExerciseClientProps> = ({
    exercise,
    currentUser
}) => {

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto mb-44">
                <div className="flex flex-row gap-9">
                    <div className="aspect-square relative overflow-hidden rounded-xl w-[40vw] ">
                        <Image alt="Image" src={exercise.gifUrl} fill className=""/>
                    </div>
                    <div className="flex flex-col w-[40vw]">
                        <p className=" text-[#8A8A8A] pb-4 font-semibold text-[18px]">{exercise.target.toUpperCase()}</p>
                        <div className="text-5xl font-bold mb-4">
                            {`${exercise.name}`.toUpperCase()}
                        </div>
                        <div className="text-[18px] font-semibold text-neutral-500 mt-2">
                            <p>Equipment: <span className="text-white">{exercise.equipment}</span></p>
                            <p>Secondary muscles: <span className="text-white">{exercise.secondaryMuscles.map((muscle: any) => muscle).toString()}</span></p>
                            <p className="pt-8">Video instructions:</p>
                        </div>

                    </div>
                </div>
                <div className="mt-20 flex flex-col gap-4">
                    <p className="text-[#FF4400] font-semibold">How to do it:</p>
                    <div className="font-semibold flex flex-col gap-2">{exercise.instructions.map((inst: any, index: any) => {
                        return (<p key={index}>{inst}</p>);
                    })
                    }</div>
                </div>
            </div>
        </Container>
    );
}

export default ExerciseClient;