'use client';

import Search from "@/app/components/Search";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Container from "@/app/components/Container";
import ExerciseCard from "@/app/components/ExerciseCard";
import { useCurrentUser } from "@/app/components/CurrentUserProvider";
import EmptyState from "@/app/components/EmptyState";
import Pagination from "@/app/components/Pagination";
import { useExerciseContext } from "@/app/ExerciseContext";
import Footer from "@/app/components/Footer";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import gsap from "gsap-trial";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const ExercisesPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { exercises, setExercises } = useExerciseContext();
    const [exercisesPerPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSmootherReady, setIsSmootherReady] = useState(false);
    const topOfExercisesRef = useRef<HTMLDivElement>(null);
    const { currentUser } = useCurrentUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            keyword: '',
        },
    });

    useLayoutEffect(() => {
        let smoother: any;
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
            if (ScrollTrigger.isTouch !== 1) {
                smoother = ScrollSmoother.create({
                    wrapper: '.wrapper',
                    content: '.content',
                    smooth: 1.9, // duration of smooth scroll
                    onUpdate: () => {
                        if (!isSmootherReady) {
                            setIsSmootherReady(true);
                        }
                    },
                });
                gsap.fromTo('.search', {opacity: 1}, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: '.search',
                        start: '100',
                        end: '300',
                        scrub: true
                    }});
            }
            window.scrollTo(0, 0);
        }

        return () => {
            if (smoother) smoother.kill();
        };
    }, [isSmootherReady]);
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        if (topOfExercisesRef.current) {
            gsap.to(window, { duration: 1, scrollTo: { y: topOfExercisesRef.current, autoKill: false } });
        }
    };

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    console.log(topOfExercisesRef);

    return (
        <>
            {!isSmootherReady && (
                <div className="preloader z-50 absolute w-[100vw] h-[100vh] bg-black text-white text-3xl flex justify-center items-center">
                    <h1>Loading...</h1>
                </div>
            )}
            {(
                <>
                        <div className="wrapper">
                            <div className="content" >
                                <div ref={topOfExercisesRef}>
                                    <Container>
                                        <div data-speed="2" className="search px-[24vw]  pt-32">
                                            <div className="font-bold text-2xl text-[#8A8A8A] flex flex-row gap-2 pb-10 justify-center">
                                                <h1>EXPLORE</h1><h1 className="text-white">HUNDREDS</h1><h1>OF  EXERCISES!!!</h1>
                                            </div>
                                            <Search
                                                currentUser={currentUser}
                                                value="sike"
                                                id="exercise"
                                                label="Enter exercise"
                                                disabled={isLoading}
                                                register={register}
                                                errors={errors}
                                                setCurrentPage={setCurrentPage}
                                                required
                                            />
                                            {exercises.length === 0 && <EmptyState />}
                                        </div>
                                        <div className="cards flex-grow">
                                            <div className="grid pt-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                                                {currentExercises.map((exercise: any) => (
                                                    <ExerciseCard
                                                        currentUser={currentUser}
                                                        key={exercise.id}
                                                        data={exercise}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-center mt-10">
                                            <Pagination
                                                exercisesPerPage={exercisesPerPage}
                                                totalExercises={exercises.length}
                                                paginate={paginate}
                                                currentPage={currentPage}
                                            />
                                        </div>
                                    </Container>
                                    <div className="pt-32">
                                        <Footer/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
            )}
        </>
    );
}

export default ExercisesPage;
