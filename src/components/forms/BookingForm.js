import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";
import ReactDatePicker from "react-datepicker";
import { GUESTS, EMAIL_REGEX, MINIMUM_NAME_CHARACTERS } from "../../constants/registration";
import Heading from "../typography/Heading";
import ValidationError from "./ValidationError";
import useAxios from "../../hooks/useAxios";
import "react-datepicker/dist/react-datepicker.css";

// const schema = yup.object().shape({
//   startDate: yup
//     .string(),
//   endDate: yup
//     .date()
//     .nullable(),
//   name: yup
//     .string()
//     .required("Please enter your name")
//     .min(MINIMUM_NAME_CHARACTERS, `Your name must at be at least ${MINIMUM_NAME_CHARACTERS} characters`),
//   email: yup
//     .string()
//     .required("Please enter your email address")
//     .matches(EMAIL_REGEX, "Your email is not valid"),
//   guests: yup
//     .number()
//     .required("Please select how many guests will be staying"),
//   rooms: yup
//     .number()
//     .required("Please select how many rooms you would like to book"),
//   message: yup
//     .string()
// });

const schema = yup.object().shape({
  fields: {
    startDate: yup
      .string().required(),
    endDate: yup
      .date().nullable,
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
  },
});



export default function BookingForm() {

  const [startDate, setStartDate] = useState(new Date());
  const [dayAfter, setDayAfter] = useState(new Date(startDate.getTime() + 86400000));
  const [endDate, setEndDate] = useState(dayAfter);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { register, handleSubmit, control, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const http = useAxios();

  async function onSubmit(data) {
      setServerError(null);
      data.status = "publish";
      console.log(data);

      try {
        const response = await http.post("/wp/v2/enquiry", data);
        console.log("response", response.data);
      }

      catch (error) {
        console.log("error", error);
        setServerError(error.toString());
      }

      finally {
        setSubmitted(true);
      }
  }

  return (
    <>
      <Form id="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h3" title="Request booking" />
        {submitted && <Alert variant="success">
          <h4>Thank you!</h4> Your enquiry was successful. <br /> We will get back to you shortly.
        </Alert>}

        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field }) => (
              <ReactDatePicker {...register("fields.startDate")}
                dateFormat="dd.MM.yyyy"
                calendarStartDay={1}
                className="input"
                placeholderText="Select date"
                onChange={(date) => field.onChange(date) && setStartDate(date)}
                selected={field.value}
              />
            )}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <ReactDatePicker {...register("fields.endDate")}
            innerRef={register}
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
          <Form.Select className="mb-3" {...register("fields.guests")}>
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
          <Form.Select className="mb-3" {...register("fields.rooms")}>
            <option>Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
          </Form.Select>
          {errors.rooms && <ValidationError>{errors.rooms.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control placeholder="Name" {...register("fields.name")} />
          {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control placeholder="E-mail" {...register("fields.email")} />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
        </Form.Group>

        <InputGroup className="mb-3" {...register("fields.message")}>
          <FormControl as="textarea" aria-label="With textarea" placeholder="Message (optional)" />
        </InputGroup>

        <Button variant="primary" type="submit">
          Request booking
        </Button>
      </Form>
    </>
  )
}







