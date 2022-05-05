import { BASE_API, TOKEN_PATH } from "../../constants/api";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "./ValidationError";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Heading from "../typography/Heading";

const url = BASE_API + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password")
})

export default function LoginForm() {

  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();
  const reDirect = () => {
    navigate("/admin");
    window.location.reload();
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response:", response.data);
      setAuth(response.data);
			reDirect();
    }

    catch (error) {
      console.log(error);
      setLoginError(error.toString());
    }

    finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h1" title="Login" className="text-center mb-4"/>
        {loginError && <Alert className="alert-danger text-center">{loginError}</Alert>}
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3" >
            <Form.Control type="username" placeholder="Username" {...register("username")} />
            {/* {errors.username && <ValidationError>{errors.username.message}</ValidationError>} */}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="password" placeholder="Password" {...register("password")} />
            {/* {errors.password && <ValidationError>{errors.password.message}</ValidationError>} */}
          </Form.Group>

          <Button variant="primary" type="submit">
            {submitting ? "Logging in..." : "Login"}
          </Button>
        </fieldset>
      </Form>
    </>
  )
}
