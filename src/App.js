import { useState } from 'react'
import Ferry from './components/Ferry'
import Info from './components/Info'
import Overlay from './components/Overlay'
import Platform from './components/Platform'
import Waves from './components/Waves'

const App = () => {
  const [showFerry, setShowFerry] = useState(true)

  return (
    <>
      <Overlay />
      <Waves />
      <Platform />
      <Ferry showFerry={showFerry} />
      <Info setShowFerry={setShowFerry}/>
    </>
  )
}

export default App