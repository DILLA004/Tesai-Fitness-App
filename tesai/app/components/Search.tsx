'use client';

import {FieldError, FieldErrors, FieldValue, FieldValues, UseFormRegister} from "react-hook-form";
import { useEffect, useState} from "react";
import { fetchData, options} from "@/app/api/exercises/fetchData";
import {SafeUser} from "@/app/types";

interface SearchProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required: boolean;
    value: string;
    setExercises: any;
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
                                         setExercises
                                     }) => {

    const [search, setSearch] = useState('');
    // const [exercises, setExercises] = useState([]);
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
            setSearch('');
            setExercises(searchedExercises);
        }
    }



    return (
        <div className="
        w-full relative">
            <input
                value={search}
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder= " "
                type={type}
                onKeyDown={(e) => {
                    if (e.key === "Enter"){
                        handleSearch();

                }}}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className={`
                   peer 
                   w-full
                   p-4
                   pt-6
                   font-light
                   bg-white
                   border-2
                   rounded-md
                   outline-none
                   transition
                   disabled:opacity-70
                   disabled:cursor-not-allowed
                   text-black
                   border-[#FF4400]
                   ${formatPrice ? 'pl-9' : 'pl-4'} 
                   ${errors[id] ? 'border-[#FF4400]' : 'border-neutral-300'}
                   ${errors[id] ? 'focus:border-[#FF4400]' : 'focus:border-black'}
                   `}
            />
            <label className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]
            ${formatPrice ? 'left-9' : 'left-4'}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? 'text-[#FF4400]' : 'text-zinc-400' }
        `}>
                {label}
            </label>

        </div>
    );
}

export default Search;