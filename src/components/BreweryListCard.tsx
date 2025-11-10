import { Card } from "./ui/card"

export default function BreweryListCard ({
    brewery, 
    handleChangeActiveBrewery,
    activeBrewery}: {brewery: any, handleChangeActiveBrewery: Function, activeBrewery: any}) {

    const {id, name, city, street, state, postal_code} = brewery

    return (
        <Card 
        className={id == activeBrewery?.id ?
            'p-2 mb-2 border-blue-500 border-x-2 hover:border-x-4 cursor-pointer' :
            'p-2 mb-2 hover:border-black hover:border-x-4 cursor-pointer'
        }
        onClick={() => handleChangeActiveBrewery(brewery)}>
            <h1 className={'font-bold'}>{name}</h1>
            <h1>{street} {city}, {state} {postal_code}</h1>
        </Card>
        
    )
} 