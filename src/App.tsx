import React, { useEffect, useState } from 'react'
import Section from './components/Section'
import SearchSection from './components/SearchSection'
import { getBreweryByName, getBreweryByCity } from './hooks/searchActions'
import SearchResults from './components/SearchResults'
import BreweryDetails from './components/BreweryDetails'
import NoDetails from './components/NoDetails'
import ProfileSection from './components/ProfileSection'

function App() {

  const [searchResult, setSearchResult] = useState<any>([])
  const [activeBrewery, setActiveBrewery] = useState<any>(null)
  const [activeProfile, setActiveProfile] = useState<any>(null)
  const [availableProfiles, setAvailableProfiles] = useState<any>([])

  useEffect(() => {
    if (activeProfile) {
      return
    } else if (!activeProfile) {
      populateProfileList()
    }
  },[])

  const handleSearch: Function = async (e: React.SyntheticEvent<HTMLFormElement>, val: string, filter: string) => {
    e.preventDefault()

    if (filter.toLowerCase() == "name"){
      setSearchResult(await getBreweryByName(val))
    } else if (filter.toLowerCase() == "city") {
      setSearchResult(await getBreweryByCity(val))
    }     
  }

  const handleChangeActiveBrewery: Function = (breweryData: any) : void => {
    setActiveBrewery(breweryData)
  }

  function populateProfileList() {

    const profileData = localStorage.getItem("users")

    if (profileData == null) {

      const newGuest: any = { 
        id: "guest",
        name: "Visitor",  
        favorites: []
      }      
      setAvailableProfiles(availableProfiles.push(newGuest))
      localStorage.setItem("users", JSON.stringify(availableProfiles))
    } else {
      parseUsersFromLocalStorage()
    }
  }

  function parseUsersFromLocalStorage () {
    let usersString: any = localStorage.getItem("users")
    let usersArray: any = JSON.parse(usersString)

    setAvailableProfiles(usersArray)
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
        activeBrewery={activeBrewery ? activeBrewery: null}/>  
      </Section>
      <Section borderColor='border-themeYellow'>
        {activeBrewery ? <BreweryDetails brewery={activeBrewery} profileIsActive={activeProfile ? true : false}/> : 
          <NoDetails/>}
      </Section>
      <Section borderColor='border-themeOrange'>
        <ProfileSection activeProfile={activeProfile} availableProfiles={availableProfiles}/>
      </Section>
    </div>
    </>
  )
}

export default App
