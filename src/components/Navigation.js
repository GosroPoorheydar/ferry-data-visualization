const Navigation = ({ setShowFerry }) => {
    return (
        <nav className="m-nav">
            <button onClick={() => setShowFerry(prevState => !prevState)} className="go-ferry">LAAT HEM VAREN</button>
        </nav>
    )
}

export default Navigation