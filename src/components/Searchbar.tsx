import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function Searchbar () {

    const [ search, setSearch ] = React.useState('')
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    
    return (
        <>
        <div className="p-2">
            <Input placeholder="search..." value={search} onChange={(e) => handleChange(e)}/>
            <Button>Test</Button>            
        </div>
        </>
    )
}