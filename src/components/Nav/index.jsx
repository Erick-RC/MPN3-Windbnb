import './Nav.css'
import Logo from '../img/logo.png'
import Red from '../img/red-search.png'

export const Nav = () => {
  return (
    <nav className="nav-container">
    <div className="left-content">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <h1>Stays in Finland</h1>
    </div>
    <div className="right-content">
      <div className="search-container">
        <button onClick={''}>{''}</button>
        <div className="AddGuests">
          <button onClick={''}>Add guests</button>
        </div>
        <button onClick={''}>
          <img src={Red} alt="search"/>
        </button>
      </div>
      <h6>12+ stays</h6>
    </div>
  </nav>
  )
}
