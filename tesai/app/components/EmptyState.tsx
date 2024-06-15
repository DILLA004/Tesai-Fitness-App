"use client";

import {useRouter} from "next/navigation";
import Heading from "@/app/components/Heading";

interface EmptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}
const EmptyState:React.FC<EmptyState> = ({
    title = "No exercises found",
    subtitle = "Try another keyword",
                                             showReset
}) => {
    const router = useRouter();

    return (
        <div className="
        h-[60vh] flex flex-col gap-2 justify-center items-center" >
            <Heading center title={title} subtitle={subtitle}/>
        </div>
    )
}

export default EmptyState;