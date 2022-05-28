import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import useAxios from "../../hooks/useAxios";

export default function UploadImages() {

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState();
  const [serverError, setServerError] = useState(null);
  const [image, setImage] = useState([]);
  const http = useAxios();

  const { handleSubmit } = useForm();

  const formData = new FormData();

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    formData.append('file', image);

    try {
      const response = await http.post("wp/v2/media", formData);

      if (response.data) {
        setSubmitted(true);
      }
    }

    catch (error) {
      setServerError(error.toString());
    }

    finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form id="upload-images-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading Tag="h3" title="Upload images" className="text-center"/>
        <Paragraph
          Tag="em"
          content="If you need to add new images - upload all four of them here then select
            them by their title in the image dropdown in the next form."
          className="text-center mb-4 fs-5"
        />
        {serverError && <Alert className="alert-danger text-center">{serverError}</Alert>}
        {submitted && <Alert variant="success"><h4>Success</h4> Image was uploaded</Alert>}
        <fieldset disabled={submitting}>

          <Form.Group className="mb-3" >
            <Form.Label>
              Upload the following:
              <ul>
                <li>
                  Main image (Must be square format)
                </li>
                <li>
                  Image 1 (Should be 2000 x 1333px)
                </li>
                <li>
                  Image 2 (Should be 2000 x 1333px)
                </li>
                <li>
                  Image 3 (Should be 2000 x 1333px)
                </li>
              </ul>
            </Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            {submitting ? "Uploading..." : "Upload image"}
          </Button>

        </fieldset>
      </Form>
    </>
  )
}
