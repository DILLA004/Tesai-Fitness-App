"use client";


import Avatar from "@/app/components/Avatar";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {User} from "@prisma/client";

interface UserMenuProps{
    currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
                                           }) =>{
    const registerModal = useRegisterModal();
    return (
        <div className="relative pr-24">
            <div className="flex flex-row items-center gap-3">

                <div onClick={registerModal.onOpen}
                     className="hidden md:block text-sm text-white font-semibold py-1.5 px-7 rounded-full transition cursor-pointer border-2 border-[#FF4400] hover:bg-gradient-to-r from-[#FF4400] to-[#FF0000]" >
                    JOIN US
                </div>


                <div onClick={()=>{}} className="p-4 md:py-1 hidden md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer transition">
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;