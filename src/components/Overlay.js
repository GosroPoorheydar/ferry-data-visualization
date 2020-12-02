import { useState } from 'react'

const Overlay = () => {
    const [showOverlay, setShowOverlay] = useState(true)

    return (
        <div className={showOverlay ? "m-overlay" : "m-overlay m-overlay--hide"}>
            <div className="m-overlay__container">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi aliquam rem ab, reiciendis eum. Obcaecati illum labore accusantium accusamus illo explicabo ad eos animi voluptates dignissimos! Dolor, minus eum.</p>
                <button onClick={() => setShowOverlay(false)} className="m-overlay__button">GO!</button>
            </div>
        </div>
    )
}

export default Overlay