import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ExperienceItem({ title, acf }) {
  return (
    <Card>
      <Card.Img variant="top" src={acf.image} />
      <Card.Body>
        <div className="card-text">
          <Card.Title>{title.rendered}</Card.Title>
          <Card.Text><em>From ${acf.price} </em></Card.Text>
        </div>
        <Button className="btn-tertiary">&rarr;</Button>
      </Card.Body>
    </Card>
  )
}
