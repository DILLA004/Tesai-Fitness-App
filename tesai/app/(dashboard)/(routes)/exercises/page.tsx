// ExercisesPage.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import Container from '@/app/components/Container';
import ExerciseCard from '@/app/components/exercises/ExerciseCard';
import { useCurrentUser } from '@/app/components/CurrentUserProvider';
import EmptyState from '@/app/components/EmptyState';
import Pagination from '@/app/components/Pagination';
import { useExerciseContext } from '@/app/components/exercises/ExerciseContext';
import Footer from '@/app/components/Footer';
import Search from '@/app/components/Search';
import Filters from '@/app/components/exercises/Filters';
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
const ExercisesPage: React.FC = () => {
    const { exercises, setExercises } = useExerciseContext();
    const [exercisesPerPage] = useState(30);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<FiltersType>({ bodyPart: '', equipment: '', target: '' });
    const [filterOptions, setFilterOptions] = useState({
        bodyParts: [] as string[],
        equipment: [] as string[],
        targets: [] as string[],
    });
    const topOfExercisesRef = useRef<HTMLDivElement>(null);
    const { currentUser } = useCurrentUser();

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: { keyword: '' },
    });

    useEffect(() => {
        const fetchFilterOptions = async () => {
            const response = await fetch('/api/exercises');
            const data: Exercise[] = await response.json();

            const bodyParts = Array.from(new Set(data.map(exercise => exercise.bodyPart)));
            const equipment = Array.from(new Set(data.map(exercise => exercise.equipment)));
            const targets = Array.from(new Set(data.map(exercise => exercise.target)));

            setFilterOptions({
                bodyParts,
                equipment,
                targets
            });
        };

        fetchFilterOptions();

        // return () => {
        //     // Reset exercises state when component unmounts
        //     setExercises([]);
        // };
    }, [setExercises]);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        if (topOfExercisesRef.current) {
            topOfExercisesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const value = '';
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    return (
        <div className="wrapper">
            <div className="content">
                <div ref={topOfExercisesRef}>
                    <Container>
                        <div data-speed="2" className="search px-[24vw] pt-32">
                            <div className="font-bold text-2xl text-[#8A8A8A] flex flex-row gap-2 pb-10 justify-center">
                                <h1>EXPLORE</h1>
                                <h1 className="text-white">HUNDREDS</h1>
                                <h1>OF EXERCISES!!!</h1>
                            </div>
                            <Search
                                currentUser={currentUser}
                                value={setSearch}
                                id="exercise"
                                label="Enter exercise"
                                disabled={false}
                                register={register}
                                errors={errors}
                                setCurrentPage={setCurrentPage}
                                required
                                filters={filters}
                            />
                        </div>

                        <div className="flex flex-row">

                            <div className="flex">
                                <Filters filters={filters} setFilters={setFilters} options={filterOptions} />
                            </div>
                            <div className="flex-grow flex-row">
                                {exercises.length === 0 && <EmptyState />}

                                    {(search !== '' && exercises.length !== 0) && (
                                        <div className={`pt-8 -mb-14 text-xl font-semibold `}>
                                        <div className="flex flex-row gap-3">
                                            <p className="text-[#8e8e8e]">Searched exercises for:</p>
                                            <p>{search.toUpperCase()}</p>
                                        </div>
                                        </div>
                                        )
                                    }

                                <div className="grid py-24 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                                    {currentExercises.map((exercise) => (
                                        <ExerciseCard currentUser={currentUser} key={exercise.id} data={exercise} />
                                    ))}
                                </div>
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
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExercisesPage;
