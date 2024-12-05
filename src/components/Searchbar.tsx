import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { getBreweryByName } from "@/hooks/searchActions"
import SearchDropdown from "./SearchDropdown"

export default function Searchbar () {
    
    const [ search, setSearch ] = React.useState('')
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    
    return (
        <>
        <div className="p-2 flex flex-col justify-center h-full">
            <Input placeholder="search..." value={search} onChange={(e) => handleChange(e)}/>
            <div className="flex flex-row mt-2">
                <Button className="mx-1" onClick={() => getBreweryByName(search)}>Find Froth</Button>
                <SearchDropdown/>
            </div>
        </div>
        </>
    )
}