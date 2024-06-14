"use client";

// CurrentUserContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { SafeUser } from "@/app/types/index";

interface CurrentUserContextProps {
    currentUser: SafeUser | null;
}

const CurrentUserContext = createContext<CurrentUserContextProps | undefined>(undefined);

export const useCurrentUser = () => {
    const context = useContext(CurrentUserContext);
    if (context === undefined) {
        throw new Error('useCurrentUser must be used within a CurrentUserProvider');
    }
    return context;
};

interface CurrentUserProviderProps {
    children: ReactNode;
    currentUser: SafeUser | null;
}

export const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({ children, currentUser }) => {
    return (
        <CurrentUserContext.Provider value={{ currentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
