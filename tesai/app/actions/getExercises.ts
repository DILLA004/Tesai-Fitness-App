import {fetchData} from "@/app/api/exercises/fetchData";
import axios from "axios";

export default async function getExercises(){
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
            'x-rapidapi-key': '4871ba3e1bmsh75f6deaea23debcp16605fjsn5fe87926da34',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
