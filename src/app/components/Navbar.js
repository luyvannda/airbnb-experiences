import logo from "./images/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="a red airbnb logo"></img>
    </nav>
  )
}