import PropTypes from "prop-types";

export default function Heading({ Tag, className, title }) {
  return <Tag className={className}>{title}</Tag>;
}

Heading.propTypes = {
  Tag: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}
