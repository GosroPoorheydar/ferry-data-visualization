import { useState } from 'react'
import people from '../img/people.png'

const Overlay = () => {
    const [showOverlay, setShowOverlay] = useState(false)

    if (showOverlay) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    return (
        <div className={showOverlay ? "m-overlay" : "m-overlay m-overlay--hide"}>
            <div className="m-overlay__container">
                <h1>MASK ON,<br></br> F*CK IT MASK OFF</h1>
                <h2>A data visualization about the ferries in Amsterdam.</h2>
                <img src={people} alt=""/>
                <p>(one in five people doesn't wear a when leaving the ferry)</p>
                <button onClick={() => setShowOverlay(false)} className="m-overlay__button">Show me the data!</button>
            </div>
        </div>
    )
}

export default Overlay