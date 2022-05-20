import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function AccommodationItem({ id, acf }) {
  return (
    <Link to={`accommodation/${id}`}>
      <Card>
      <Card.Img variant="top" src={acf.img_thumb} />
        <Card.Body>
          <div className="card-text">
            <Card.Title>{acf.title}</Card.Title>
            <Card.Text><em>From ${acf.price} / night</em></Card.Text>
          </div>
          <Button className="btn-tertiary">&rarr;</Button>
        </Card.Body>
      </Card>
    </Link>
  )
}
