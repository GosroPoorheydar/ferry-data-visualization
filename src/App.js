import { useState } from 'react'
import Ferry from "./components/Ferry"
import Navigation from "./components/Navigation"
import Overlay from "./components/Overlay"
import Platform from "./components/Platform"

const App = () => {
  const [showFerry, setShowFerry] = useState(false)

  return (
    <div className="App">
      <Overlay />
      <Navigation setShowFerry={setShowFerry} />
      <Ferry showFerry={showFerry} />
      <Platform />
    </div>
  )
}

export default App