import photo1 from "./images/katie-swimmer.png"
import star from "./images/Star.png"

export default function Card() {
  return (
    <section className="card">
      <div className="first-card">
        <img src={photo1} alt="A woman swimming instructor"></img>
        <p>
          <img src={star} alt="A small red star"></img></p>
      </div>
    </section>
  )
}