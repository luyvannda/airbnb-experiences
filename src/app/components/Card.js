import photo1 from "./images/katie-swimmer.png"
import star from "./images/Star.png"
import ellipse from "./images/Ellipse.png"

export default function Card() {
  return (
    <section className="card">
      <div className="first-card">
        <p className="card1-status">SOLD OUT</p>
        <img className="card-photo" src={photo1} alt="A woman swimming instructor"></img>
        <p className="card-rating">
          <img className="star" src={star} alt="A small red star"></img> 5.0 <span>(6) <img className="ellipse" src={ellipse} alt="an ellipse"></img> USA</span>
        </p>
        <p className="card-description"></p>
      </div>
    </section>
  )
}