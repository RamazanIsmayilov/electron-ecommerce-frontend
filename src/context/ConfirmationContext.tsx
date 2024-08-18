import React, { createContext, ReactNode } from 'react'
import Swal from 'sweetalert2'

export interface ConfirmationContextType {
    confirm: (message: string) => Promise<boolean>
}

export const defaultConfirmationValue = {
    confirm: async () => false
}

export const ConfirmationContext = createContext<ConfirmationContextType>(defaultConfirmationValue)

export const ConfirmationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const confirm = async (message: string) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#2252D1',
            cancelButtonColor: 'red'
        })
        return result.isConfirmed
    };
    return (
        <ConfirmationContext.Provider value={{ confirm }}>
            {children}
        </ConfirmationContext.Provider>
    )
}
