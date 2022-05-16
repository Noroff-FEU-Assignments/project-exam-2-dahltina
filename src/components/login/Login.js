import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import LoginForm from "../forms/LoginForm";

export default function Login() {

  useEffect(() => {
    document.title = "Add accommodation | Holidaze";
  }, []);

  return (
    <Container className="my-5">
      <LoginForm />
    </Container>
  )
}
