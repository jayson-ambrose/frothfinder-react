import React, { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import SearchDropdown from "./SearchDropdown"

export default function SearchSection ({ handleSearch }: {handleSearch: Function}) {
    
    const [ search, setSearch ] = useState('')
    const [searchType, setSearchType] = useState('Name')
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return (
        <>
        <form onSubmit={(e) => handleSearch(e, search)} className="bg-white absolute mx-5 my-5 inset-x-0 inset-y-0 w-96 h-28 border-4 rounded-lg">
            <div className="p-2 flex flex-col justify-center h-full">
                <Input placeholder="search..." value={search} onChange={(e) => handleChange(e)}/>
                <div className="flex flex-row mt-2">
                    <Button type='submit' className="mx-1">Find Froth</Button>
                    <SearchDropdown searchType={searchType} setSearchType={setSearchType}/>
                </div>
            </div>
        </form>
        </>
    )
}