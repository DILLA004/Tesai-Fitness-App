'use client';
import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState} from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Inputs/Input";
// import toast from "react-hot-toast";
import Button from "@/app/components/Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import {useRouter} from "next/navigation";
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        })
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success('Wow, You are logged in now!!!', {
                        position: 'top-right',
                        autoClose: 6000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        // Add custom styling here
                        style: {
                            backgroundColor: '#424242',
                            color: "black"
                        },
                    });
                    router.refresh();
                    loginModal.onClose();
                }

                if(callback?.error) {
                    toast.error('Sorry, something went wrong', {
                        position: 'top-right',
                        autoClose: 6000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        // Add custom styling here
                        style: {
                            backgroundColor: '#424242',
                            color: "black"
                        },
                    });
                }
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
            title="Welcome back"
            subtitle="Login to an account"/>
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            {/*<Button*/}
            {/*    outline*/}
            {/*    label="Continue with GitHub"*/}
            {/*    icon={AiFillGithub}*/}
            {/*    onClick={() => signIn('github')}*/}
            {/*/>*/}
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Don`t have an account yet?
                    </div>
                    <div onClick={() => {registerModal.onOpen(); loginModal.onClose()}}
                         className="text-[#FF4400]
                        cursor-pointer hover:underline">
                        Sign up
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;