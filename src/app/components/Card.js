import star from "./images/Star.png"
import ellipse from "./images/Ellipse.png"


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/


export default function Card(props) {
  return (
    <section className="card">
      <div className="first-card">
        <p className="card1-status">{props.status}</p>
        <img className="card-photo" src={props.img} alt={props.alt}></img>
        <p className="card-rating">
          <img className="star" src={star} alt="A small red star"></img> {props.rating} <span>{props.reviewCount} <img className="ellipse" src={ellipse} alt="an ellipse"></img> {props.country}</span>
        </p>
        <p className="card-description">{props.description} <span>From ${props.price}</span> / person
        </p>
      </div>
    </section>
  )
}