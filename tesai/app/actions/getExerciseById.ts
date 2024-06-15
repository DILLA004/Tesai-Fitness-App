import {fetchData, options} from "@/app/api/exercises/fetchData";


interface IParams {
    exerciseId?:string;
}

export default async function getExerciseById(params: IParams){
    try {
        const { exerciseId  } = params;

        const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300', options);

        const searchedExercise = exercises.filter(
            (exercise: any) =>   exercise.id == exerciseId
        );

        return searchedExercise[0];

    } catch (error: any){

    }
}