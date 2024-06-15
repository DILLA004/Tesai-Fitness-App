'use client';

import {FieldError, FieldErrors, FieldValue, FieldValues, UseFormRegister} from "react-hook-form";
import { useEffect, useState} from "react";
import { fetchData, options} from "@/app/api/exercises/fetchData";
import {SafeUser} from "@/app/types";
import { IoSearch } from "react-icons/io5";
import {black} from "next/dist/lib/picocolors";
import {useExerciseContext} from "@/app/ExerciseContext";
interface SearchProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required: boolean;
    value: string;
    //setExercises: any;
    setCurrentPage: any,
    currentUser?: SafeUser | null;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Search: React.FC<SearchProps> = ({
                                         id,
                                         label,
                                         type = "text",
                                         value,
                                         disabled,
                                         formatPrice,
                                         register,
                                         required,
                                         errors,
                                        currentUser,
                                         //setExercises,
                                           setCurrentPage
                                     }) => {

    const [search, setSearch] = useState('');
    const { setExercises } = useExerciseContext();

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300', options);
            const searchedExercises = exercisesData.filter(
                (exercise: { name: string; target: string; equipment: string; bodyPart: string; }) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );
            // setSearch('');
            setExercises(searchedExercises);
            setCurrentPage(1);
        }
    }



    return (
        <div className={`
        w-full relative flex flex-row bg-white border-[#FF4400]
                   outline-none
                   transition
                   disabled:cursor-not-allowed
                   border-2
                   rounded-md
                   focus:border-black 
                   ${errors[id] ? 'border-[#FF4400]' : 'border-neutral-300'}
                   ${errors[id] ? 'focus:border-[#FF4400]' : 'focus:border-black'}`}>
            <IoSearch className="pt-4 pl-4 text-neutral-500" size={40}/>
            <input
                value={search}
                id={id}
                {...register(id, {required})}
                placeholder= "Enter a body part, exercise name, etc..."
                type={type}
                onKeyDown={(e) => {
                    if (e.key === "Enter"){
                        e.preventDefault();
                        handleSearch();

                }}}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className={`
                   w-full
                   p-4
                   font-light
                   bg-white
                   outline-none
                   transition
                   text-black
                   `}
            />
        </div>
    );
}

export default Search;