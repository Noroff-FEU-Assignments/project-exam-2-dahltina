import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Heading from "../typography/Heading";
import ValidationError from "./ValidationError";
import useAxios from "../../hooks/useAxios";
import MediaDropdown from "../admin/media/MediaDropdown";

const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  location: yup.string().required("Please enter location"),
  price: yup.number().required("Please enter price per night"),
  facilities: yup.string().required("Please enter facilities"),
  excerpt: yup.string().required("Please enter a short description"),
  description: yup.string().required("Please enter full description")
})

export default function BookingForm() {

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [id, setId] = useState(null);
  const { register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });
  const http = useAxios();

  async function onSubmit(data) {
      console.log(data);
      setSubmitting(true);
      setServerError(null);

      const newData = {
        status: "publish",
        fields: data,
      }

      try {
        const response = await http.post("wp/v2/accommodations", newData);
        console.log("response:", response.data);

        if (response.data) {
          setSubmitted(true);
          setId(response.data.id);
        }
      }

      catch (error) {
        console.log("error", error);
        setServerError(error.toString());
      }

      finally {
        setSubmitting(false);
      }
  }

  console.log(errors);

  return (
    <>
      <Form id="add-accommodation-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h3" title="Add accommodation" className="mb-3 text-center"/>
        {submitted && <Alert variant="success">
          <h4>Success</h4> New accommodation has been added. <br />
          <Link to={`../accommodation/${id}`}>See it here</Link>
        </Alert>}
        {serverError && <Alert className="alert-danger text-center">{serverError}</Alert>}

        <fieldset disabled={submitting}>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Title" {...register("title")} />
            {errors.title && <ValidationError>{errors.title.message}</ValidationError>}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Location" {...register("location")} />
            {errors.location && <ValidationError>{errors.location.message}</ValidationError>}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Price" {...register("price")} />
            {errors.price && <ValidationError>{errors.price.message}</ValidationError>}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Facilities" {...register("facilities")} />
            {errors.facilities && <ValidationError>{errors.facilities.message}</ValidationError>}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control as="textarea" rows={2} placeholder="Excerpt" {...register("excerpt")}/>
            {errors.excerpt && <ValidationError>{errors.excerpt.message}</ValidationError>}
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control as="textarea" rows={3} placeholder="Description" {...register("description")}/>
            {errors.description && <ValidationError>{errors.description.message}</ValidationError>}
          </Form.Group>

          <MediaDropdown register={register} />

          <Button variant="primary" type="submit" >
            {submitting ? "Adding..." : "Add accommodation"}
          </Button>
        </fieldset>
      </Form>
    </>
  )
}
