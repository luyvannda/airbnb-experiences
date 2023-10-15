import star from "./images/Star.png"
import ellipse from "./images/Ellipse.png"

export default function Card(props) {
  let cardStatus;
  if (props.item.openSpots === 0) {
    cardStatus = "SOLD OUT";
  } else if (props.item.location === "Online") {
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
        <img className="card-photo" src={`./images/${props.item.coverImg}`} alt={props.item.alt}></img>
        <p className="card-rating">
          <img className="star" src={star} alt="A small red star"></img> {props.item.stats.rating} <span>({props.item.stats.reviewCount}) <img className="ellipse" src={ellipse} alt="an ellipse"></img> {props.item.country}</span>
        </p>
        <p className="card-title">{props.item.title} </p>

        <p className="card-price">
          <span>From ${props.item.price}</span> / person
        </p>
      </div>
    </section >
  )
}