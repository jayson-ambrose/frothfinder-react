import { ScrollArea } from "./ui/scroll-area"
import BreweryListCard from "./BreweryListCard"

export default function SearchResults ({
    searchResult, 
    handleChangeActiveBrewery, 
    activeBreweryId}:{
        searchResult: any[], 
        handleChangeActiveBrewery: Function, 
        activeBreweryId: String}) {

    const mappedResults = searchResult.map((brewery) => {
        return (
            <BreweryListCard 
            key={brewery.id} 
            brewery={brewery}
            handleChangeActiveBrewery={handleChangeActiveBrewery} 
            isActiveBrewery={(activeBreweryId == brewery.id) ? true : false}/>
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