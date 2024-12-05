import Searchbar from './components/Searchbar'
import Section from './components/Section'
import SearchSection from './components/SearchSection'

function App() {

  return (
    <>
    <SearchSection/>
    <div draggable='false' className='bg-black py-10 flex flex-col items-center pointer-events-none'>
      <img draggable='false' className='h-72 w-auto select-none pointer-events-none' src='https://cdn.imgchest.com/files/7ogcbaaodwy.png' alt='frothfinder logo' id='logo'/>
    </div>
    <div className='flex justify-around lg:flex-row sm:flex-col'>
      <Section borderColor='border-themeRed'>
        <Searchbar />
      </Section>
      <Section borderColor='border-themeYellow'>
        <Searchbar />
      </Section>
      <Section borderColor='border-themeOrange'>
        <Searchbar />
      </Section>
    </div>
    </>
  )
}

export default App
