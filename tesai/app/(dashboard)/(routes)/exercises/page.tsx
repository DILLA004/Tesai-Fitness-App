"use client";

import Search from "@/app/components/Search";
import React, {useEffect, useRef, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import Container from "@/app/components/Container";
import ExerciseCard from "@/app/components/ExerciseCard";
import {useCurrentUser} from "@/app/components/CurrentUserProvider";
import EmptyState from "@/app/components/EmptyState";
import Pagination from "@/app/components/Pagination";
import {useExerciseContext} from "@/app/ExerciseContext";

const ExercisesPage = () => {
    const isEmpty = true;
    const [isLoading, setIsLoading] = useState(false);
    const {exercises, setExercises} = useExerciseContext();
    const [exercisesPerPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);

    const { currentUser } = useCurrentUser();
    console.log('currentUser in ChildComponent:', currentUser);

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
    const topOfExercisesRef = useRef<HTMLDivElement>(null);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        if (topOfExercisesRef.current) {
            topOfExercisesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if(exercises.length == 0) {
        return (
            <div className="pt-32  pb-32">
                <Container>
                    <div className="px-[30vw]">
                        <Search
                            currentUser={currentUser}
                            //setExercises={setExercises}
                            value="sike"
                            id="exercise"
                            label="Enter exercise"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            setCurrentPage={setCurrentPage}
                            required
                        />
                    </div>
                        <EmptyState/>
                </Container>
            </div>
        )
    }

    return (
        <div ref={topOfExercisesRef} className="pt-32  pb-32">
            <Container >
                <div className="px-[30vw]">
                    <Search
                        currentUser={currentUser}
                        //setExercises={setExercises}
                        value="sike"
                        id="exercise"
                        label="Enter exercise"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        setCurrentPage={setCurrentPage}
                        required
                    />
                </div>
                <div  className="flex-grow">
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
                        {currentExercises.map((exercise: any) => (
                            <ExerciseCard
                                currentUser={currentUser}
                                key={exercise.id}
                                data={exercise}/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-8"> {/* Add margin here */}
                    <Pagination
                        exercisesPerPage={exercisesPerPage}
                        totalExercises={exercises.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
            </Container>
        </div>
    );
}

export default ExercisesPage;
