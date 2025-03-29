import React from 'react';
import Card from '../atoms/Card';
import Title from '../atoms/Title';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import PropTypes from 'prop-types';

const CardItem = ({ title, text, image, titleTag }) => {
  return (
    <Card>
      {image && <Image src={image} alt={title} />}
      <Title text={title} as={titleTag} />
      <Text content={text} />
    </Card>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  titleTag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "strong"])
};

export default CardItem;
