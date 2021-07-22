import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import Carousel from '../components/Slider';

const HomeScreen = () => {
  const dispatch = useDispatch();

  //去state裡面找到我要的loading, error, products
  const productList = useSelector((state) => state.productList);
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
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}

      {/* 為甚麼這裡的function 要使用括號 而不是{} */}
    </>
  );
};

export default HomeScreen;
