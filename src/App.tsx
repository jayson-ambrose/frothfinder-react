import React, { useState } from 'react'
import Section from './components/Section'
import SearchSection from './components/SearchSection'
import { getBreweryByName } from './hooks/searchActions'
import SearchResults from './components/SearchResults'

function App() {

  const [searchResult, setSearchResult] = useState<any>([])

  const handleSearch = async (e: React.SyntheticEvent<HTMLFormElement>, val: string) => {
    e.preventDefault()
    setSearchResult(await getBreweryByName(val))
  }

  return (
    <>
    <SearchSection handleSearch={handleSearch}/>
    <div draggable='false' className='bg-black py-10 flex flex-col items-center pointer-events-none'>
      <img draggable='false' className='h-72 w-auto select-none pointer-events-none' src='https://cdn.imgchest.com/files/7ogcbaaodwy.png' alt='frothfinder logo' id='logo'/>
    </div>
    <div className='flex justify-around flex-col lg:flex-row'>
      <Section borderColor='border-themeRed'>
        <SearchResults searchResult={searchResult}/>
      </Section>
      <Section borderColor='border-themeYellow'>
        <h1></h1>
      </Section>
      <Section borderColor='border-themeOrange'>
        <h1></h1>
      </Section>
    </div>
    </>
  )
}

export default App
