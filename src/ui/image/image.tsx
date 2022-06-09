import PropTypes from "prop-types";
import styled from "styled-components";

const ProductImageComponent = styled.img`
  max-height: 18.75rem;
  object-fit: cover;
  display: block;
  position: relative;
  max-width: 21vmin;
`;

type IImage = {
  src: string;
  alt: string;
  className: string;
};

const Image = ({ src, alt, className }: IImage) => (
  <ProductImageComponent
    loading="lazy"
    src={src}
    alt={alt}
    className={className}
  />
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
