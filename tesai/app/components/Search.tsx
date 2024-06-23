import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import {SafeUser} from "@/app/types";
import { IoSearch } from "react-icons/io5";
import { useExerciseContext } from "@/app/components/exercises/ExerciseContext";


interface SearchProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required: boolean;
    value: any;
    setCurrentPage: any;
    currentUser?: SafeUser | null;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    filters: FiltersType;
}
interface Exercise {
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    [key: string]: any; // Index signature to allow dynamic keys
}
type FiltersType = {
    [key: string]: string;
};
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
                                           setCurrentPage,
                                           filters
                                       }) => {
    const [search, setSearch] = useState('');
    const { setExercises } = useExerciseContext();

    const handleSearch = async () => {
        const response = await fetch('/api/exercises');
        const data: Exercise[] = await response.json();
        const filteredData = data.filter((exercise: Exercise) => {
            const matchesSearch = search
                ? exercise.name.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search)
                : true;

            const matchesFilters = Object.keys(filters).every(filterName => {
                return filters[filterName] ? exercise[filterName] === filters[filterName] : true;
            });

            return matchesSearch && matchesFilters;
        });

        setExercises(filteredData);
        setCurrentPage(1);
        value(search);
    };

    return (
        <div className={`
        w-full 
        relative 
        flex  
        bg-white 
        outline-none
        transition
        disabled:cursor-not-allowed
        rounded-md
        focus:border-black 
        `}>
            <IoSearch className="
            pt-4
            pl-4
            text-neutral-500 hover:cursor-pointer" size={40} onClick={() => handleSearch()} />
            <input
                value={search}
                id={id}
                {...register(id, { required })}
                placeholder="Enter a body part, exercise name, etc..."
                type={type}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleSearch();
                    }
                }}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className={`
                   w-full
                   p-4
                   font-light
                   bg-white
                   outline-none
                   transition
                   text-black
                   mr-3.5
                   `}
            />
        </div>
    );
}

export default Search;
