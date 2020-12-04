import { useState } from 'react'
import Ferry from './components/Ferry'
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay'
import Platform from './components/Platform'
import Waves from './components/Waves'
import Footer from './components/Footer'

const App = () => {
  const [selectedFerry, setSelectedFerry] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  return (
    <>
      <Overlay />
      <Waves />
      <Platform selectedTime={selectedTime} selectedFerry={selectedFerry}/>
      <Ferry selectedFerry={selectedFerry} />
      <Sidebar selectedFerry={selectedFerry} setSelectedFerry={setSelectedFerry} setSelectedTime={setSelectedTime}/>
      <Footer />
    </>
  )
}

export default App