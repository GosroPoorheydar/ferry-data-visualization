import { useState } from 'react'
import Ferry from "./components/Ferry"
import Navigation from "./components/Navigation"
import Overlay from "./components/Overlay"
import Platform from "./components/Platform"
import Sidebar from './components/Sidebar'
import Waves from './components/Waves'

const App = () => {
  const [showFerry, setShowFerry] = useState(true)

  return (
    <>
      <Overlay />
      <Navigation setShowFerry={setShowFerry} />
      <Waves />
      <Platform />
      <Ferry showFerry={showFerry} />
      {/* <Sidebar /> */}
    </>
  )
}

export default App