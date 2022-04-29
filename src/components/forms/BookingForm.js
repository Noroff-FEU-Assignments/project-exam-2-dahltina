import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GUESTS, EMAIL_REGEX, MINIMUM_NAME_CHARACTERS } from "../../constants/registration";
import Heading from "../typography/Heading";
import ValidationError from "./ValidationError";

const schema = yup.object().shape({
  startDate: yup
    .date()
    .nullable(),
  endDate: yup
    .date()
    .nullable(),
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
  message: yup
    .string()
});

export default function BookingForm() {

  const [startDate, setStartDate] = useState(new Date());
  // const dayAfter = new Date(startDate.getTime() + 86400000);
  const [dayAfter, setDayAfter] = useState(new Date(startDate.getTime() + 86400000));
  const [endDate, setEndDate] = useState(dayAfter);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, control, formState: { errors }} = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
      console.log(data);
      // POST or PUT request
      setSubmitted(true);
  }

  console.log(errors);

  return (
    <>
      <Form id="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h3" title="Request booking" />
        {submitted && <Alert variant="success">
          <h4>Thank you!</h4> Your enquiry was successful. <br /> We will get back to you shortly.
        </Alert>}

        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <DatePicker {...register("startDate")}
            dateFormat="dd.MM.yyyy"
            calendarStartDay={1}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => setStartDate(date) && setDayAfter(date)}
          />
          {errors.startDate && <ValidationError>{errors.startDate.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <DatePicker {...register("endDate")}
            dateFormat="dd.MM.yyyy"
            calendarStartDay={1}
            selected={endDate}
            startDate={dayAfter}
            endDate={endDate}
            minDate={dayAfter}
            onChange={(date) => setEndDate(date)}
          />
          {errors.endDate && <ValidationError>{errors.endDate.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select className="mb-3" {...register("guests")}>
            <option>Guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
          </Form.Select>
          {errors.guests && <ValidationError>{errors.guests.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control placeholder="Name" {...register("name")} />
          {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control placeholder="E-mail" {...register("email")} />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
        </Form.Group>

        <InputGroup className="mb-3" {...register("message")}>
          <FormControl as="textarea" aria-label="With textarea" placeholder="Message (optional)" />
        </InputGroup>

        <Button variant="primary" type="submit">
          Request booking
        </Button>
      </Form>
    </>
  )
}



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

{/* <Form.Group className="mb-3">
<Controller {...register("startDate")}
  as={<DatePicker />}
  control={control}
  render={({ onChange, value }) => (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      calendarStartDay={1}
      selected={startDate}
      minDate={startDate}
      onChange={(date) => setStartDate(date) && setDayAfter(date)}
    />
  )}
/>
{errors.startDate && <ValidationError>{errors.startDate.message}</ValidationError>}
</Form.Group> */}





