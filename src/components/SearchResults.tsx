export default function SearchResults ({searchResult}: {searchResult: any[]}) {

    const mappedResults = searchResult.map((brewery) => {
        return (
            <h1 key={brewery.id}>{brewery.name}</h1>
        )
    })

    return (
        <>
        {mappedResults}
        </>
    )
}