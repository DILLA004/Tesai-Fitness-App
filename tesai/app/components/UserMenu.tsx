"use client";


import Avatar from "@/app/components/Avatar";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {useCallback, useState} from "react";
import MenuItem from "@/app/components/MenuItem";
import {signOut} from "next-auth/react";
import {SafeUser} from "@/app/types";

interface UserMenuProps{
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
                                           }) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const registerModal = useRegisterModal();
    return (
        <div className="relative pr-24">
            <div className="flex flex-row items-center gap-3">
                {currentUser ? (
                    <div onClick={toggleOpen}
                         className="
                     flex
                     flex-row
                     items-center
                     gap-3
                     border-[#FF4400]
                     border-2
                     rounded-full
                     hover:shadow-md
                     cursor-pointer
                     transition"
                    >
                        <div className="md:block">
                            <Avatar src={currentUser?.image}/>
                        </div>
                    </div>
                ) : (
                    <div onClick={registerModal.onOpen}
                         className=" md:block text-sm text-white font-semibold py-1.5 px-7 rounded-full transition cursor-pointer border-2 border-[#FF4400] hover:bg-gradient-to-r from-[#FF4400] to-[#FF0000]" >
                        JOIN US
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="
                absolute
                rounded-xl
                shadow-md
                w-[30vw]
                md:w-3/4
                bg-transparent
                overflow-hidden
                right-6
                top-12

                text-sm">
                    <>
                        <MenuItem onClick={() => {}} label="Profile"/>
                        <MenuItem onClick={() => {}} label="Training"/>
                        <MenuItem onClick={() => {}} label="Favourite"/>
                        <hr className="bg-neutral-700"/>
                        <MenuItem onClick={() => signOut()} label="Logout"/>
                    </>
                </div>
            )}
        </div>
    );
}

export default UserMenu;