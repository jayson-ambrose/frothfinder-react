import React, { ChangeEvent, useState } from "react";
import { Select, SelectContent, SelectItem } from "./ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

export default function SearchDropdown () {

    const [selection, setSelection] = useState('Name')

    const handleChangeSelection = (value: string) => {
        setSelection(handleUppercase(value))
    }

    const handleUppercase = (val: string) => {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1)
    }
    // below needs styling
    return (
        <>
            <Select onValueChange={handleChangeSelection}>
                <SelectTrigger>
                    {selection}
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                    <SelectItem value="state">State</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}