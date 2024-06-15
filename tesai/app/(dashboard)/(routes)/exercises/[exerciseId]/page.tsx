import getExerciseById from "@/app/actions/getExerciseById";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ExerciseClient from "@/app/components/ExerciseClient";

interface IParams {
    exerciseId?: string;
}

const ExercisePage = async ({params}:{params: IParams}) => {
    const exercise = await getExerciseById(params);
    const currentUser = await getCurrentUser();

    if(!exercise){
        return (
            <EmptyState/>
        );
    }
    return (
        <div className="pt-32">
            <ExerciseClient exercise={exercise} currentUser={currentUser}/>
        </div>
    );
}

export default ExercisePage;