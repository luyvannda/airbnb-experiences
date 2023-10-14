import star from "./images/Star.png"
import ellipse from "./images/Ellipse.png"

export default function Card(props) {
  return (
    <section className="card">
      <div className="first-card">
        <p className="card1-status">{props.status}</p>
        <img className="card-photo" src={props.img} alt={props.alt}></img>
        <p className="card-rating">
          <img className="star" src={star} alt="A small red star"></img> {props.rating} <span>{props.reviewCount} <img className="ellipse" src={ellipse} alt="an ellipse"></img> {props.country}</span>
        </p>
        <p className="card-description">{props.title} <span>From ${props.price}</span> / person
        </p>
      </div>
    </section>
  )
}