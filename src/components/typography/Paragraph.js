import PropTypes from "prop-types";

export default function Paragraph({ Tag, className, content }) {
  return <p className={className}><Tag>{content}</Tag></p>;
}

Paragraph.propTypes = {
  Tag: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string.isRequired
}
