"use client";

import {SafeUser} from "@/app/types";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import {Inter} from "next/font/google";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import ExerciseCard from "@/app/components/exercises/ExerciseCard";
import HeartButton from "@/app/components/HeartButton";

interface ExerciseClientProps {
    exercise: any;
    currentUser: SafeUser | null;
}

interface Exercise {
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    [key: string]: any; // Index signature to allow dynamic keys
}

const ExerciseClient:React.FC<ExerciseClientProps> = ({
    exercise,
    currentUser
}) => {
    console.log(currentUser);
    const [videoData, setVideoData] = useState<{ videoId: string; thumbnailUrl: string } | null>(null);
    const [recommendedExercises, setRecommendedExercises] = useState<Exercise[]>([]);
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch(`/api/getVideoLink?exerciseName=${exercise.name}`);
                const data = await response.json();
                if (data.videoId && data.thumbnailUrl) {
                    setVideoData({ videoId: data.videoId, thumbnailUrl: data.thumbnailUrl });
                }
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };
        const fetchRecommendedExercises = async () => {
            try {
                const response = await fetch('/api/exercises'); // API endpoint to fetch exercises
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: never[] = await response.json();
                const filteredExercises = data.filter((item: any) => item.target === exercise.target && item.name !== exercise.name);
                setRecommendedExercises(filteredExercises.slice(0, 3));
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };

        fetchVideoData();
        fetchRecommendedExercises();
    }, [exercise.name, exercise.target]);
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto mb-44">
                <div className="flex flex-row gap-9">
                    <div className="aspect-square relative overflow-hidden rounded-xl w-[40vw] ">
                        <Image alt="Image" src={exercise.gifUrl} fill className=""/>
                    </div>
                    <div className="flex flex-col w-[40vw]">
                        <div className="flex flex-row justify-between pr-2">
                            <p className=" text-[#8A8A8A] pb-4 font-semibold text-[18px]">{exercise.target.toUpperCase()}</p>
                            <HeartButton
                                exerciseId={exercise.id}
                                currentUser={currentUser}/>
                        </div>
                        <div className="text-5xl font-bold mb-4">
                            {`${exercise.name}`.toUpperCase()}
                        </div>
                        <div className="text-[18px] font-semibold text-neutral-500 mt-2">
                            <p>Equipment: <span className="text-white">{exercise.equipment}</span></p>
                            <p>Secondary muscles: <span className="text-white">{exercise.secondaryMuscles.map((muscle: any) => muscle).toString()}</span></p>
                            <p className="pt-8">Video instructions:</p>
                        </div>
                        {videoData && (
                            <div className="relative bottom-0 right-0 w-full rounded-lg">
                                <a className="rounded-lg" href={`https://www.youtube.com/watch?v=${videoData.videoId}`} target="_blank" rel="noopener noreferrer">
                                    <img className="w-full rounded-lg h-auto max-h-52 object-cover" src={videoData.thumbnailUrl} alt={`Video for ${exercise.name}`} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-20 flex flex-col gap-4">
                    <p className="text-[#FF4400] font-semibold">How to do it:</p>
                    <div className="font-semibold flex flex-col gap-2">{exercise.instructions.map((inst: any, index: any) => {
                        return (<p key={index}>{inst}</p>);
                    })
                    }</div>
                </div>
                {recommendedExercises.length > 0 && (
                    <div className="mt-28">
                        <h2 className="text-3xl font-bold mb-4">Recommended Exercises</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendedExercises.map((item, index) => (
                                <ExerciseCard data={item} currentUser={currentUser} key={index} exercises={null}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default ExerciseClient;