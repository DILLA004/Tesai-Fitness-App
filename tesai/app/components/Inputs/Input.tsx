'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    validation?: {
        required: string | boolean;
        minLength?: {
            value: number;
            message: string;
        };
        maxLength?: {
            value: number;
            message: string;
        };
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
}

const Input: React.FC<InputProps> = ({
                                         id,
                                         label,
                                         type = "text",
                                         disabled,
                                         register,
                                         required,
                                         errors,
                                         validation
                                     }) => {
    const hasError = errors[id];

    return (
        <div className="w-full relative">
            <input
                id={id}
                disabled={disabled}
                {...register(id, validation)}
                placeholder={label}
                type={type}
                className={`
                    w-full
                    p-3
                    pt-3
                    pl-3
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    text-black
                    ${errors[id] ? 'border-[#FF4400]' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-[#FF4400]' : 'focus:border-[#FF4400]/40'}
                `}
            />
            {errors[id] && (
                <p className="text-[#FF4400] text-sm -mb-4">
                    {errors[id]?.message as string}
                </p>
            )}
        </div>
    );
}

export default Input;
