import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

export default function SearchDropdown () {

    const [selection, setSelection] = useState('Name')

    const handleChangeSelection = (val: string) => {
        setSelection(String(val).charAt(0).toUpperCase() + String(val).slice(1))
    }    
    
    return (
        <>
            <Select onValueChange={handleChangeSelection}>
                <SelectTrigger className="border-2 border-black text-md py-4 font-medium rounded-md">
                    { selection }
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}