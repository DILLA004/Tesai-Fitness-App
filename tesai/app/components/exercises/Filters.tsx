import CustomSelect from "@/app/components/exercises/CustomSelect";
import React, {useEffect, useState} from "react";
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
    const [isActive, setIsActive] = useState(false);
    const { exercises, setExercises } = useExerciseContext();


    const { originalExercises } = useExerciseContext();

    const handleFilterChange = (filterName: string, value: string) => {
        setFilters({
            ...filters,
            [filterName]: value,
        });
    };

    useEffect(() => {
        applyFilters();
    }, [filters, originalExercises]);

    const applyFilters = () => {
        const filteredData = originalExercises.filter((exercise) => {
            return Object.keys(filters).every((filterName) => {
                return filters[filterName] === '' || exercise[filterName] === filters[filterName];
            });
        });
        // Update exercises state with filtered data
        setExercises(filteredData);
    };
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

        </div>
    );
};

export default Filters;
