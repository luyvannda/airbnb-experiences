import image from "./images/hero-background-image.png"


export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-photo" src={image} alt="group photos"></img>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts&mdash;all without leaving home.</p>
    </section>
  )
}