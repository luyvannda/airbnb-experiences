import star from "./images/Star.png"
import ellipse from "./images/Ellipse.png"

export default function Card(props) {
  let cardStatus;
  if (props.openSpots === 0) {
    cardStatus = "SOLD OUT";
  } else if (props.location === "Online") {
    cardStatus = "ONLINE"
  } else {
    cardStatus = "";
  }

  return (
    <section className="card-container">
      <div className="card">
        {cardStatus !== "" ?
          <p className="card-status">{cardStatus}</p>
          : null
        }
        <img className="card-photo" src={props.img} alt={props.alt}></img>
        <p className="card-rating">
          <img className="star" src={star} alt="A small red star"></img> {props.rating} <span>({props.reviewCount}) <img className="ellipse" src={ellipse} alt="an ellipse"></img> {props.country}</span>
        </p>
        <p className="card-description">{props.title} <span>From ${props.price}</span> / person
        </p>
      </div>
    </section>
  )
}