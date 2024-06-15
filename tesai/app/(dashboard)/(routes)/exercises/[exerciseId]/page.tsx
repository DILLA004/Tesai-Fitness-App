import getExerciseById from "@/app/actions/getExerciseById";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ExerciseClient from "@/app/components/ExerciseClient";
import Footer from "@/app/components/Footer";
import {fetchData, options, youtubeOptions} from "@/app/api/exercises/fetchData";

interface IParams {
    exerciseId?: string;
}

const ExercisePage = async ({params}:{params: IParams}) => {
    //const youtubeSearch = 'youtube-search-and-download.p.rapidapi.com';
    const exercise = await getExerciseById(params);
    //const exerciseVideo = await fetchData(`${youtubeSearch}/search?q=${exercise.name}`, youtubeOptions);
    const currentUser = await getCurrentUser();

    if(!exercise){
        return (
            <EmptyState/>
        );
    }
    return (
        <>
            <div className="pt-32">
                <ExerciseClient exercise={exercise} currentUser={currentUser}/>
            </div>
            <Footer/>
        </>
    );
}

export default ExercisePage;