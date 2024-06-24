// /app/(dashboard)/(routes)/exercises/[exerciseId]/page.tsx
"use client"
import { useEffect, useState } from 'react';
import EmptyState from '@/app/components/EmptyState';
import getCurrentUser from '@/app/actions/getCurrentUser';
import ExerciseClient from '@/app/components/exercises/ExerciseClient';
import Footer from '@/app/components/Footer';
import {useCurrentUser} from "@/app/components/CurrentUserProvider";

interface IParams {
    exerciseId?: string;
}


const ExercisePage = ({ params }: { params: IParams }) => {
    const [exercise, setExercise] = useState<any>(null);
    const { currentUser } = useCurrentUser();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchExercise = async () => {
            try {
                const response = await fetch('/api/exercises'); // Adjust URL as per your API route
                if (!response.ok) {
                    throw new Error('Failed to fetch exercise data');
                }
                const data = await response.json();
                const filteredExercise = data.filter((ex: any) => ex.id === params.exerciseId);
                setExercise(filteredExercise.length > 0 ? filteredExercise[0] : null);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching exercise:', error);
                setExercise(null);
                setIsLoading(false);
            }
        };


        fetchExercise();
    }, [params.exerciseId]);

    if (isLoading) {
        return <div className="justify-center items-center">Loading...</div>;
    }

    if (!exercise) {
        return <EmptyState />;
    }

    return (
        <>
            <div className="pt-32">
                <ExerciseClient exercise={exercise} currentUser={currentUser} />
            </div>
            <Footer />
        </>
    );
};

export default ExercisePage;
