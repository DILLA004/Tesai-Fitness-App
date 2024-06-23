import {User } from "@prisma/client";
import {exercises } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified">
& {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};
export interface FiltersType{
    bodyPart: string;
    equipment: string;
    target: string;
}
export interface Exercise {
    id: string;
    name: string;
    bodyPart: string;
    equipment: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
}