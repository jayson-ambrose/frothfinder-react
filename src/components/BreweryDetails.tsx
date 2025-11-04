export default function BreweryDetails ({brewery}: {brewery: any}) {

    return (
        <div>
            <h1>{brewery.name}</h1>
            <h1>{brewery.id}</h1>
        </div>
    )

}