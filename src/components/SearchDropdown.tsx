import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

export default function SearchDropdown ({searchType, setSearchType}: {searchType: string, setSearchType: Function}) {

    const handleChangeSelection = (val: string) => {
        setSearchType(String(val).charAt(0).toUpperCase() + String(val).slice(1))
    }
    
    return (
        <>
            <Select onValueChange={handleChangeSelection}>
                <SelectTrigger className="border-2 border-black text-md py-4 font-medium rounded-md">
                    { searchType }
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}