import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import ValidationError from "./ValidationError";
// import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../typography/Heading";
import useAxios from "../../hooks/useAxios";

const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  location: yup.string().required("Please enter location"),
  price: yup.number().required("Please enter price per night"),
  facilities: yup.string().required("Please enter facilities"),
  excerpt: yup.string().required("Please enter a short description"),
  description: yup.string().required("Please enter description")
})

export default function AddAccommodationForm() {

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const http = useAxios();

  // const navigate = useNavigate();
  // const LinkToNewItem = () => {
  //   navigate("/accommodation/id");
  // };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    data.status = "publish";

    try {
      const response = await http.post("wp/v2/accommodations/", data);
      console.log("response", response.data);
    }

    catch (error) {
      console.log(error);
      setServerError(error.toString());
    }

    finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  return (
    <>
      <Form id="add-accommodation-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h1" title="Add accommodation" className="text-center mb-4"/>
        {serverError && <Alert className="alert-danger text-center">{serverError}</Alert>}
        {submitted && <Alert variant="success"><h4>Success</h4> New accommodation has been added.</Alert>}
        <fieldset disabled={submitting}>

          <Row>
            <Col className="col-12 col-md-6">
              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Title" {...register("title")} />
                {/* {errors.title && <ValidationError>{errors.title.message}</ValidationError>} */}
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Location" {...register("fields.location")} />
                {/* {errors.location && <ValidationError>{errors.location.message}</ValidationError>} */}
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Price" {...register("fields.price")} />
                {/* {errors.price && <ValidationError>{errors.price.message}</ValidationError>} */}
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Facilities" {...register("fields.facilities")} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control as="textarea" rows={2} placeholder="Excerpt" {...register("excerpt")}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Control as="textarea" rows={3} placeholder="Description" {...register("description")}/>
              </Form.Group>

            </Col>
            <Col className="col-12 col-md-6">

              <Form.Group className="mb-3" >
                <Form.Label>Main image (Displayed on home page. Must be square format)</Form.Label>
                <Form.Control type="file" {...register("fields.img_thumb")} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Image 1 (Should be 2000 x 1333px)</Form.Label>
                <Form.Control type="file" {...register("fields.img_1")} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Image 2 (Should be 2000 x 1333px)</Form.Label>
                <Form.Control type="file" {...register("fields.img_2")} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Image 3 (Should be 2000 x 1333px)</Form.Label>
                <Form.Control type="file" {...register("fields.img_3")} />
              </Form.Group>

              <Button variant="primary" type="submit" >
                {submitting ? "Adding..." : "Add accommodation"}
              </Button>

            </Col>
          </Row>
        </fieldset>
      </Form>
    </>
  )
}

