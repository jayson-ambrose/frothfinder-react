export default function BreweryDetails ({brewery}: {brewery: any}) {
    
    const {id, street, city, state, postal_code, name, phone, website_url} = brewery

    function formatPhoneNumber(phoneString: string) {

        if (phoneString.length !== 10){
            throw new Error('unable to format phone number'
            )
        }

        return `(${phoneString.slice(0, 3)})${phoneString.slice(3, 6)}-${phoneString.slice(6)}`
    } 

    return (
        <div>
            <h1 className="font-bold text-xl">{name}</h1>
            <h1>{street}</h1>
            <h1>{city}, {state} {postal_code}</h1>
            <h1>{formatPhoneNumber(phone)}</h1>
            <a href={website_url} target="blank">{website_url}</a>
        </div>
    )

}