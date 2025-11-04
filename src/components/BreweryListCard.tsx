import { Card } from "./ui/card"

export default function BreweryListCard ({
    brewery, 
    handleChangeActiveBrewery,
    isActiveBrewery}: {brewery: any, handleChangeActiveBrewery: Function, isActiveBrewery: boolean}) {

    const {name, city, street, state, postal_code} = brewery

    console.log(isActiveBrewery)

    return (
        <Card className={isActiveBrewery ? 
        'p-2 mb-2 hover:border-black hover:border-2 cursor-pointer' : 
        'p-2 mb-2 border-blue hover:border-yellow hover:border-2 cursor-pointer'} onClick={() => handleChangeActiveBrewery(brewery)}>
            <h1 className={'font-bold'}>{name}</h1>
            <h1>{street} {city}, {state} {postal_code}</h1>
        </Card>
        
    )
} 