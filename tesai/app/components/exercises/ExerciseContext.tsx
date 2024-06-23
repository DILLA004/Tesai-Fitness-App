"use client";
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ExerciseContextType {
    exercises: any[];
    setExercises: React.Dispatch<React.SetStateAction<any[]>>;
}

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
        const fetchExercises = async () => {
            try {
                const response = await fetch('/api/exercises'); // API endpoint to fetch exercises
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setExercises(data);
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };

        fetchExercises();
    }, []);

    return (
        <ExerciseContext.Provider value={{ exercises, setExercises }}>
            {children}
        </ExerciseContext.Provider>
    );
};
