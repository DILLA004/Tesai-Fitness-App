"use client";

import {Exercise} from "@prisma/client";
import {SafeUser} from "@/app/types";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Image from "next/image";

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
                <div className="flex flex-row gap-14">
                    <div className="aspect-square relative overflow-hidden rounded-xl w-[50vh] h-[50vh]">
                        <Image alt="Image" src={exercise.gifUrl} fill className="object-cover w-full"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-5xl font-bold mb-14">
                            {`${exercise.name}`.toUpperCase()}
                        </div>
                        <div className="text-2xl font-medium text-neutral-500 mt-2">
                            <p>Muscle group:  {exercise.target.toUpperCase()}</p>
                            <p>Equipment: {exercise.equipment.toUpperCase()}</p>
                            <p>{`Secondary muscles: ${exercise.secondaryMuscles.map((muscle: any) => muscle.toUpperCase())}`}</p>
                        </div>

                    </div>
                </div>
                <div className="mt-20 flex flex-col gap-4">
                    {exercise.instructions.map((inst: any, index: any) => {
                        return (<p key={index}>{index + 1 + '.' + inst}</p>);
                        })
                    }
                </div>
            </div>
        </Container>
    );
}

export default ExerciseClient;