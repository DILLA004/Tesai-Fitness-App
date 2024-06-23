import React, { useState, useRef, useEffect } from 'react';

interface CustomSelectProps {
    options: string[];
    selectedOption: string;
    onOptionSelect: (option: string) => void;
    label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectedOption, onOptionSelect, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectRef = useRef<HTMLDivElement>(null);
    const handleClose = () =>{
        setIsOpen(false);
        onOptionSelect('')
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={selectRef} className="pb-3 w-[18vw] pr-8">
            <button
                type="button"
                className={`flex flex-row justify-between w-full bg-[#2d2d2d] mb-1 border-2 rounded-md p-2 text-left focus:border-white ${selectedOption ? 'border-white text-white' : 'border-[#8E8E8E] text-[#8e8e8e]'}`}
                onClick={toggleDropdown}
            >
                {selectedOption.toUpperCase() || label}
                {selectedOption ? (
                    <img src="../images/Layer_1 (1).png" alt="cancel" onClick={handleClose} className={`fill-[#8e8e8e]`}/>
                    ) : (
                    <img src="../images/Layer_1.png" alt="dropdown" className={`${isOpen && 'scale-y-[-1]'} fill-[#8e8e8e]`}/>
                    )
                }

            </button>
            {isOpen && (

                <ul className="absolute w-[16vw] z-10 mt-1 bg-[#2D2D2D] border-2 border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {options.map(option => (
                        <li
                            key={option}
                            className={`cursor-pointer select-none relative py-2 pl-3 pr-9  hover:text-white ${option === selectedOption ? 'font-semibold text-white' : 'text-[#8e8e8e]'}`}
                            onClick={() => {
                                onOptionSelect(option);
                                setIsOpen(false);
                            }}
                        >
                            {option.toUpperCase()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
