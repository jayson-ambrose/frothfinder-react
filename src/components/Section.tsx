import React from "react";

export default function Section ({children, borderColor}: {children: React.ReactNode, borderColor: string}) {

    return (
        <>
        <div className={`border-${borderColor} border-4 rounded-xl lg:w-1/4 sm:w-full xs:w-full h-96 mt-5`}>
            {children}
        </div>            
        </>
    )
}