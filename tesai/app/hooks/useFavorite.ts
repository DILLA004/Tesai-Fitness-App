import axios from "axios";
import { useRouter} from "next/navigation";
import { useCallback, useMemo} from "react";
import { toast } from 'react-hot-toast';

import { SafeUser } from "../types";

import useLoginModal from "./useLoginModal";

interface IUseFavorite {
    exerciseId: string;
    currentUser?: SafeUser | null;
}

const useFavorite = ({
    exerciseId,
    currentUser
}: IUseFavorite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(exerciseId);
    }, [currentUser, exerciseId]);

    const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if(!currentUser){
            return loginModal.onOpen();
        }

        try{
            let request;

            if(hasFavorited){
                request = () => axios.delete(`/api/favorites/${exerciseId}`);
            } else{
                request = () => axios.post(`/api/favorites/${exerciseId}`);
            }
            await request();
            router.refresh();
            toast.success('Success');
        } catch (error){
            toast.error('Something went wrong');
        }
    }, [currentUser, hasFavorited, exerciseId, loginModal, router]);

    return {
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorite;