import React, { useState } from 'react'
import Section from './components/Section'
import SearchSection from './components/SearchSection'
import { getBreweryByName, getBreweryByCity } from './hooks/searchActions'
import SearchResults from './components/SearchResults'
import BreweryDetails from './components/BreweryDetails'

function App() {

  const [searchResult, setSearchResult] = useState<any>([])
  const [activeBrewery, setActiveBrewery] = useState<any>(null)

  const handleSearch: Function = async (e: React.SyntheticEvent<HTMLFormElement>, val: string, filter: string) => {
    e.preventDefault()
    console.log(filter)

    if (filter.toLowerCase() == "name"){
      setSearchResult(await getBreweryByName(val))
    } else if (filter.toLowerCase() == "city") {
      setSearchResult(await getBreweryByCity(val))
    }     
  }

  const handleChangeActiveBrewery: Function = (breweryData: any) : void => {
    setActiveBrewery(breweryData)
  }

  return (
    <>
    <SearchSection handleSearch={handleSearch}/>
    <div draggable='false' className='bg-black py-10 flex flex-col items-center pointer-events-none'>
      <img draggable='false' className='h-72 w-auto select-none pointer-events-none' src='https://cdn.imgchest.com/files/7ogcbaaodwy.png' alt='frothfinder logo' id='logo'/>
    </div>
    <div className='flex justify-around flex-col lg:flex-row'>
      <Section borderColor='border-themeRed'>
        <SearchResults 
        searchResult={searchResult} 
        handleChangeActiveBrewery={handleChangeActiveBrewery} 
        activeBreweryId={activeBrewery ? activeBrewery.id : null}/>  
      </Section>
      <Section borderColor='border-themeYellow'>
        {activeBrewery ? <BreweryDetails brewery={activeBrewery}/> : <h1>NO BREWERY SELECTED</h1>}
      </Section>
      <Section borderColor='border-themeOrange'>
        <h1></h1>
      </Section>
    </div>
    </>
  )
}

export default App
