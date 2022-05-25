import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <>
      <p className="mt-4">
        Bergen Brygge 10 <br />
        1222 Bergen <br />
        Norway
      </p>
      <p>Tel: <Link to="#">+47 00 00 00 00</Link></p>
      <p>Mail: <Link to="#">hello@holidaze.com</Link></p>
    </>
  )
}
