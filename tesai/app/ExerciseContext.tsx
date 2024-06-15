"use client"

import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {fetchData, options} from "@/app/api/exercises/fetchData";

interface ExerciseContextType {
    exercises: any[];
    setExercises: React.Dispatch<React.SetStateAction<any[]>>;
}

const DefaultExercises = async () => {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300', options);
    return exercisesData;
};

const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export const useExerciseContext = (): ExerciseContextType => {
    const context = useContext(ExerciseContext);
    if (context === undefined) {
        throw new Error("useExerciseContext must be used within an ExerciseProvider");
    }
    return context;
};

interface ExerciseProviderProps {
    children: ReactNode;
}

export const ExerciseProvider: React.FC<ExerciseProviderProps> = ({ children }) => {
    const [exercises, setExercises] = useState<any[]>([]);

    useEffect(() => {
        const fetchDefaultExercises = async () => {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300', options);
            setExercises(exercisesData);
        };

        fetchDefaultExercises();
    }, []);
    return (
        <ExerciseContext.Provider value={{ exercises, setExercises }}>
            {children}
        </ExerciseContext.Provider>
    );
};
