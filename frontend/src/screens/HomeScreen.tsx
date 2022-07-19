import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import Carousel from '../components/Slider';

import { RootState } from '../store.d';

type productTypes = {
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

const HomeScreen = () => {
  const dispatch = useDispatch();

  //去state裡面找到我要的loading, error, products
  /* 
 為何需要使用 RootState
*/
  const productList = useSelector((state: RootState) => state.productList);
  const { loading, error, products } = productList;

  //redux 動作執行
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product: productTypes) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
