import { Button } from "./ui/button"

export default function BreweryDetails ({brewery}: {brewery: any}) {
    
    const {id, street, city, state, postal_code, name, phone, website_url, latitude, longitude} = brewery

    function formatPhoneNumber(phoneString: string) {

        if (phoneString.length !== 10){
            throw new Error('unable to format phone number'
            )
        }

        return `(${phoneString.slice(0, 3)})${phoneString.slice(3, 6)}-${phoneString.slice(6)}`
    } 

    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h1>{street}</h1>
            <h1>{city}, {state} {postal_code}</h1>
            <h1>{phone ? formatPhoneNumber(phone) : null}</h1>
            <h1>{website_url}</h1>
            <a target='blank' href={`https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}`} className='text-blue-500'>
                Get Directions
            </a>
            <Button className="bg-themeOrange">Favorite</Button>
        </div>
    )

}