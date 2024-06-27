'use client'

import {SafeUser} from "@/app/types";
import {useCurrentUser} from "@/app/components/CurrentUserProvider";
import {useState} from "react";
import Footer from "@/app/components/Footer";
import Avatar from "@/app/components/Avatar";
import Input from "@/app/components/Inputs/Input";

const Profile = () => {
    const { currentUser } = useCurrentUser();
    const [pageName, setPageName] = useState('profile')
    const [newPassword, setNewPassport] = useState('');
    const togglePage = (name: string) =>{
        setPageName(name);
    }

    return (
        <div className="">
            <div className="min-h-[100vh] pt-32 px-[25vw]">
                <div className="w-full flex  ">
                    <div className=" w-full flex flex-row justify-center gap-20 text-white font-bold items-center">
                        <div onClick={() => togglePage("profile")}>Profile</div>
                        <div onClick={() => togglePage("savedWk")}>Saved workouts</div>
                        <div onClick={() => togglePage("savedEx")}>Saved exercises</div>
                    </div>
                </div>
                {
                    pageName == "profile" && (
                        <>
                        <div className="pt-8">
                            <Avatar src={currentUser?.image} height={160} width={160}/>
                        </div>
                            {/*<Input*/}
                            {/*id="email"*/}
                            {/*label="Email"*/}
                            {/*type="email"*/}
                            {/*disabled={isLoading}*/}
                            {/*    register={register}*/}
                            {/*    errors={errors}*/}
                            {/*    validation={{*/}
                            {/*        required: "Email is required",*/}
                            {/*        pattern: {*/}
                            {/*            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,*/}
                            {/*            message: "Invalid email address",*/}
                            {/*        },*/}
                            {/*    }}*/}
                            {/*    required*/}
                            {/*/>*/}
                            {/*<Input*/}
                            {/*    id="name"*/}
                            {/*    label="Name"*/}
                            {/*    disabled={isLoading}*/}
                            {/*    register={register}*/}
                            {/*    errors={errors}*/}
                            {/*    validation={{*/}
                            {/*        required: "Name is required",*/}
                            {/*        pattern: {*/}
                            {/*            value: /^[a-zA-Z0-9]{3,16}$/,*/}
                            {/*            message: 'Name must be 3-16 characters long and contain only letters and numbers',*/}
                            {/*        },*/}
                            {/*    }}*/}
                            {/*    required*/}
                            {/*/>*/}
                            {/*<Input*/}
                            {/*    id="password"*/}
                            {/*    type="password"*/}
                            {/*    label="Password"*/}
                            {/*    disabled={isLoading}*/}
                            {/*    register={register}*/}
                            {/*    required*/}
                            {/*    errors={errors}*/}
                            {/*    validation={{*/}
                            {/*        required: "Password is required",*/}
                            {/*        pattern: {*/}
                            {/*            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,*/}
                            {/*            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'*/}
                            {/*        },*/}
                            {/*        minLength: {*/}
                            {/*            value: 8,*/}
                            {/*            message: "Password must be at least 8 characters",*/}
                            {/*        },*/}
                            {/*        maxLength: {*/}
                            {/*            value: 20,*/}
                            {/*            message: 'Password cannot exceed 20 characters',*/}
                            {/*        },*/}
                            {/*    }}*/}
                            {/*/>*/}
                        </>
                    )

                }
                {
                    pageName == "savedWk" && (
                        <div></div>
                    )

                }
                {
                    pageName == "savedEx" && (
                        <div></div>
                    )

                }

            </div>

            <Footer/>
        </div>
    );
}

export default Profile;
