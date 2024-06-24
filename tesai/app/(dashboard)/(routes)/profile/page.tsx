'use client'

import {SafeUser} from "@/app/types";
import {useCurrentUser} from "@/app/components/CurrentUserProvider";
import {useState} from "react";
import Footer from "@/app/components/Footer";

const Profile = () => {
    const { currentUser } = useCurrentUser();
    const [newPassword, setNewPassport] = useState('');


    return (
        <div className="">
            <div className="min-h-[100vh]">


            </div>

            <Footer/>
        </div>
    );
}

export default Profile;
