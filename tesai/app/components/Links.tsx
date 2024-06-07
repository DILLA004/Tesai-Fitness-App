"use client";

const Links = () =>{
    return (
        <div
        className="
        flex
        w-full
        md:w-auto
        py-2
        transition
        cursor-pointer">
            <div className="
            flex
            flex-row
            items-center
            space-x-1
            justify-between">
                <div className="
                text-sm
                font-semibold
                px-2
                text-white">
                    HOME
                </div>
                <div className="
                text-sm
                font-semibold
                px-2
                text-white">
                    EXERCISES LIST
                </div>
                <div className="
                text-sm
                font-semibold
                px-2
                text-white">
                    WORKOUT PLANS
                </div>
                <div className="
                text-sm
                font-semibold
                px-2
                text-white">
                    TRAINERS
                </div>
            </div>
        </div>
    );
}

export default Links;