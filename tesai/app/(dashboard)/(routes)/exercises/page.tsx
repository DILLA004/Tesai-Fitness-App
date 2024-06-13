"use client";

import Search from "@/app/components/Search";
import React, {useEffect, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import Container from "@/app/components/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ExerciseCard from "@/app/components/ExerciseCard";
import {SafeUser} from "@/app/types";




export default function ExercisesPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [exercises, setExercises] = useState([]);
    const [currentUser, setCurrentUser] = useState<SafeUser | null>(null); // State to hold current user

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setIsLoading(true);
                const user = await getCurrentUser();
                setCurrentUser(user);
            } catch (error) {
                console.error("Error fetching user:", error);
                // Handle error fetching user if needed
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            keyword: '',
        }
    });

    return (
        <div className="pt-32  pb-32">
            <Container>
                <div className="px-[30vw]">
                    <Search
                        setExercises={setExercises}
                        value="sike"
                        id="exercise"
                        label="Enter exercise"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <div className="
                    grid
                    pt-24
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-8
                ">

                    {exercises.map((exercise: any) => (
                        <ExerciseCard
                            // currentUser={currentUser}
                            key={exercise.id}
                            data={exercise}/>
                    ))}
                </div>
            </Container>
        </div>
    );
}
