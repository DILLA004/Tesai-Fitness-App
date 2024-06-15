'use client';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState} from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm } from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import {signIn} from "next-auth/react";
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const handleClose = () => {
        reset();  // Reset form on modal close
        registerModal.onClose();
    }
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
                toast.success('Wow, You are registered now!!!', {
                    position: 'top-right',
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    // Add custom styling here
                    style: {
                        backgroundColor: "#424242",
                    },
                });
            }).then(() =>
            signIn('credentials', {
                ...data,
                redirect: false,
            }).then(() => {
                    setIsLoading(false);
                    router.refresh();
                    loginModal.onClose();
                }
            )
        )
            .catch((error) => {
                toast.error('Sorry, the user is already exists', {
                    position: 'top-right',
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    // Add custom styling here
                    style: {
                        backgroundColor: "#424242",
                    },
                });
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Heading
            title="Welcome to Tesai"
            subtitle="Create an account!"/>
            <Input
                id="email"
                label="Email"
                type="email"
                disabled={isLoading}
                register={register}
                errors={errors}
                validation={{
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                    },
                }}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                validation={{
                    required: "Name is required",
                    pattern: {
                        value: /^[a-zA-Z0-9]{3,16}$/,
                        message: 'Name must be 3-16 characters long and contain only letters and numbers',
                },
                }}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                required
                errors={errors}
                validation={{
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                    },
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                    },
                    maxLength: {
                        value: 20,
                        message: 'Password cannot exceed 20 characters',
                    },
                }}
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
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={() => {loginModal.onOpen(); registerModal.onClose()}}
                        className="text-[#FF4400]
                        cursor-pointer hover:underline">
                        Log in
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={handleClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;