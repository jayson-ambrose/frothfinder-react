import '../public/logo.png'
import Searchbar from './components/Searchbar'
import Section from './components/Section'

function App() {

  return (
    <>
    <div className='bg-black py-10 flex flex-col items-center'>
      <img className='h-72 w-auto' src='logo.png' alt='frothfinder logo' id='logo'/>
    </div>
    <div className='flex justify-around lg:flex-row sm:flex-col'>
      <Section borderColor='themeRed'>
        <Searchbar />
      </Section>
      <Section borderColor='themeYellow'>
        <Searchbar />
      </Section>
      <Section borderColor='themeOrange'>
        <Searchbar />
      </Section>
    </div>
    </>
  )
}

export default App
