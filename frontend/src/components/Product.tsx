import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

type productTypes = {
  product: {
    _id: string;
    brand: string;
    category: string;
    countInStock: number;
    createdAt: string;
    description: string;
    image: string;
    name: string;
    numReviews: number;
    price: number;
    rating: number;
    reviews: [];
    updatedAt: string;
    user: string;
  };
};

const Product = ({ product }: productTypes) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
