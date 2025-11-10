import { ScrollArea } from "./ui/scroll-area"
import BreweryListCard from "./BreweryListCard"

export default function SearchResults ({
    searchResult, 
    handleChangeActiveBrewery, 
    activeBrewery}:{
        searchResult: any[], 
        handleChangeActiveBrewery: Function, 
        activeBrewery: any}) {

    const mappedResults = searchResult.map((brewery) => {
        return (
            <BreweryListCard 
            key={brewery.id} 
            brewery={brewery}
            handleChangeActiveBrewery={handleChangeActiveBrewery} 
            activeBrewery={activeBrewery}/>
        )
    })

    return (
        <>
        <ScrollArea className='flex flex-col items-center contain-content h-full'>
            {mappedResults}
        </ScrollArea>
        </>
    )
}