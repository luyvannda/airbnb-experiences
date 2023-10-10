import image from "./images/hero-background-image.png"


export default function Hero() {
  return (
    <div className="hero">
      <img src={image} alt="group photos"></img>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts&mdash;all without leaving home.</p>
    </div>
  )
}