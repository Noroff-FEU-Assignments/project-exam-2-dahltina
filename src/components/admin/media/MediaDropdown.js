import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

export default function MediaDropdown({ register }) {
	const [media, setMedia] = useState([]);
  const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/media?per_page=100");
				setMedia(response.data);
			}

      catch (error) {
				setError("An error occured");
			}
		}

		getMedia();
	}, []);

  if (error) {
    return  <Alert className="alert-danger text-center">
              An error occured while trying to fetch images
            </Alert>
  }

	return (
    <Form.Group className="mb-3">
			<Form.Label>Main image</Form.Label>
      <Form.Select className="mb-3" name="img_thumb" {...register("img_thumb")}>
        <option value="">Select media</option>
        {media.map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </Form.Select>
			<Form.Label>Image 1</Form.Label>
			<Form.Select className="mb-3" name="img_1" {...register("img_1")}>
        <option value="">Select media</option>
        {media.map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </Form.Select>
			<Form.Label>Image 2</Form.Label>
			<Form.Select className="mb-3" name="img_2" {...register("img_2")}>
        <option value="">Select media</option>
        {media.map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </Form.Select>
			<Form.Label>Image 3</Form.Label>
			<Form.Select className="mb-3" name="img_3" {...register("img_3")}>
        <option value="">Select media</option>
        {media.map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
	);
}

MediaDropdown.propTypes = {
	register: PropTypes.func,
};

MediaDropdown.defaultProps = {
	register: () => {},
};
