import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import { MINIMUM_MESSAGE_CHARACTERS, EMAIL_REGEX, MINIMUM_NAME_CHARACTERS } from "../../constants/registration";
import Heading from "../typography/Heading";
import ValidationError from "./ValidationError";
import useAxios from "../../hooks/useAxios";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please eginter your name")
    .min(MINIMUM_NAME_CHARACTERS, `Your name must at be at least ${MINIMUM_NAME_CHARACTERS} characters`),
  email: yup
    .string()
    .required("Please enter your email address")
    .matches(EMAIL_REGEX, "Your email is not valid"),
  subject: yup
    .string()
    .required("Please select a subject"),
  message: yup
    .string()
    .required("Please write your message. Must be at least 10 characters")
    .min(MINIMUM_MESSAGE_CHARACTERS, `Your message must at be at least ${MINIMUM_MESSAGE_CHARACTERS} characters`),
});

export default function BookingForm() {

  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });
  const http = useAxios();

  async function onSubmit(data) {
      console.log(data);

      const newData = {
        status: "publish",
        fields: data,
      }

      try {
        const response = await http.post("wp/v2/message", newData);
        console.log("response:", response.data);
      }

      catch (error) {
        console.log("error", error);
      }

      finally {
        setSubmitted(true);
      }
  }

  console.log(errors);

  return (
    <>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h3" title="Send us a message" className="mb-3"/>
        {submitted && <Alert variant="success">
          <h4>Thank you!</h4> Your message has been sent <br /> We will get back to you shortly.
        </Alert>}

        <Form.Group className="mb-3" >
          <Form.Control placeholder="Name" {...register("name")} />
          {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control placeholder="E-mail" {...register("email")} />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select className="mb-3" {...register("subject")}>
            <option value="">Subject</option>
            <option value="Booking">Booking</option>
            <option value="Experiences">Experiences</option>
            <option value="Cancelletion">Cancellation</option>
            <option value="Other">Other</option>
          </Form.Select>
          {errors.subject && <ValidationError>{errors.subject.message}</ValidationError>}
        </Form.Group>

        <InputGroup className="mb-3">
          <FormControl as="textarea" aria-label="With textarea" placeholder="Message" {...register("message")}/>
        </InputGroup>
        {errors.message && <ValidationError>{errors.message.message}</ValidationError>}

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  )
}
