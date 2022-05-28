import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import { ENQUIRY_DEFAULT_VALUES, EMAIL_REGEX, MINIMUM_NAME_CHARACTERS } from "../../constants/registration";
import Heading from "../typography/Heading";
import ValidationError from "./ValidationError";
import useAxios from "../../hooks/useAxios";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(MINIMUM_NAME_CHARACTERS, `Your name must at be at least ${MINIMUM_NAME_CHARACTERS} characters`),
  email: yup
    .string()
    .required("Please enter your email address")
    .matches(EMAIL_REGEX, "Your email is not valid"),
  guests: yup
    .number()
    .required("Please select how many guests will be staying"),
  rooms: yup
    .number()
    .required("Please select how many rooms you would like to book"),
  message: yup
    .string()
});

export default function BookingForm() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { register, reset, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const http = useAxios();

  async function onSubmit(data) {
      setServerError(null);

      const newData = {
        status: "publish",
        fields: data
      }

      try {
        const response = await http.post("/wp/v2/enquiry", newData);

        if (response.data) {
          setSubmitted(true);
        }
      }

      catch (error) {
        setServerError(error.toString());
      }

      finally {
        reset(ENQUIRY_DEFAULT_VALUES);
      }
  }

  return (
    <>
      <Form id="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h3" title="Request booking" />
        {submitted && <Alert variant="success">
          <h4>Thank you!</h4> Your enquiry was successful. <br /> We will get back to you shortly.
        </Alert>}
        {serverError && <Alert className="alert-danger text-center">{serverError}</Alert>}

        <Form.Group className="mb-3">
          <Form.Label>Check in</Form.Label>
          <Form.Control {...register("startDate", { value: startDate })}
            type="date"
            name="startDate"
            onChange={date => setStartDate(date)}
          />
          {errors.startDate && <ValidationError>{errors.startDate.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Check out</Form.Label>
          <Form.Control {...register("endDate", { value: endDate })}
            type="date"
            name="endDate"
            onChange={date => setEndDate(date)}
          />
          {errors.endDate && <ValidationError>{errors.endDate.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select {...register("guests")}>
            <option value="">Guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
            <option value="3">7</option>
            <option value="3">8</option>
          </Form.Select>
          {errors.guests && <ValidationError>{errors.guests.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select {...register("rooms")}>
            <option>Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
          </Form.Select>
          {errors.rooms && <ValidationError>{errors.rooms.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control placeholder="Name" {...register("name")} />
          {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control placeholder="E-mail" {...register("email")} />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
        </Form.Group>

        <InputGroup className="mb-3">
          <FormControl
            as="textarea"
            placeholder="Message (optional)"
            {...register("message")}
          />
          {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
        </InputGroup>

        <Button variant="primary" type="submit">
          Request booking
        </Button>
      </Form>
    </>
  )
}







