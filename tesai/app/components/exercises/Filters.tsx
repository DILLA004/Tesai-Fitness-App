import CustomSelect from "@/app/components/exercises/CustomSelect";
import React, {useState} from "react";
import {useExerciseContext} from "@/app/components/exercises/ExerciseContext";

interface FiltersProps {
    filters: FiltersType;
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
    options: { [key: string]: string[] };
}
type FiltersType = {
    [key: string]: string;
};
interface Exercise {
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    [key: string]: any; // Index signature to allow dynamic keys
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters, options }) => {
    const handleFilterChange = (filterName: string, value: string) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value,
        }));
        ToggleApply();
    };
    const [isActive, setIsActive] = useState(false);
    const { exercises } = useExerciseContext();
    const handleFilter = async () => {
        // const response = await fetch('/api/exercises');
        // const data: Exercise[] = await response.json();
        const filteredData = exercises.filter((exercise: Exercise) => {
            const matchesFilters = Object.keys(filters).every(filterName => {
                return filters[filterName] ? exercise[filterName] === filters[filterName] : true;
            });
            return matchesFilters;
        });
        setExercises(filteredData);
    };
    const ToggleApply = () => {
        setIsActive(true);
    }
    const { setExercises } = useExerciseContext();
    return (
        <div className="pt-24">
            <CustomSelect
                options={options.bodyParts}
                selectedOption={filters.bodyPart}
                onOptionSelect={option => handleFilterChange('bodyPart', option)}
                label="Body Part"
            />
            <CustomSelect
                options={options.equipment}
                selectedOption={filters.equipment}
                onOptionSelect={option => handleFilterChange('equipment', option)}
                label="Equipment"
            />
            <CustomSelect
                options={options.targets}
                selectedOption={filters.target}
                onOptionSelect={option => handleFilterChange('target', option)}
                label="Target"
            />
            <button
                type="button"
                className={`flex flex-row justify-center w-[16vw] mb-1 rounded-md p-2 ${ !isActive ? ('bg-[#8e8e8e] cursor-not-allowed') : ('bg-[#ff4400]')} focus:border-white border-white text-white border-[#8E8E8E] text-[#8e8e8e]}`}
                onClick={handleFilter}
            >
                APPLY
            </button>
        </div>
    );
};

export default Filters;
