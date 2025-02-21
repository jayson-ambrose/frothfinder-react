export async function  getBreweryByName (query: string) {
        const data = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${query}`)
        .then(resp => resp.json())

        return data
    }

export async function getBreweryByCity (query: string) {
    const data = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${query}`)
    .then(resp => resp.json())

    return data
}
    
    //get brewery by name
    //get breweries near me SG: paginated
    //get breweries by city SG: include surrounding cities option
    //spike: client-side pagination or remote pagination
    //per page default: 50 max: 200
    //get random brewery near me

// typical return from api.

// {
//     "id": "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
//     "name": "MadTree Brewing 2.0",
//     "brewery_type": "regional",
//     "address_1": "5164 Kennedy Ave",
//     "address_2": null,
//     "address_3": null,
//     "city": "Cincinnati",
//     "state_province": "Ohio",
//     "postal_code": "45213",
//     "country": "United States",
//     "longitude": "-84.4137736",
//     "latitude": "39.1885752",
//     "phone": "5138368733",
//     "website_url": "http://www.madtreebrewing.com",
//     "state": "Ohio",
//     "street": "5164 Kennedy Ave"
// }