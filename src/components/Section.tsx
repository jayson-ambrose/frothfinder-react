import React from "react";

export default function Section ({children, borderColor}: {children: React.ReactNode, borderColor: string}) {

    return (
        <>
        <div className={`border-4 ${borderColor} rounded-xl lg:w-1/4 sm:w-full xs:w-full h-128 mt-5 p-2`}>
            {children}
        </div>            
        </>
    )
}