import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails } from '../actions/productActions';

// @ts-ignore
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  //.find() 去尋找 第一個 滿足 product._id === match.params.id的值
  //product._id (有很多 1.2.3.4)  === match.params.id (當前Router 的id)
  //const product = products.find((product) => product._id === match.params.id)
  const dispatch = useDispatch();
  // @ts-ignore
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // 使用dispatch 拿到data
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  //使用useSelector 分配拿到的data

  const addToCartHandler = () => {
    //history.push 重新導向某個網頁
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>

      {/* handling error */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        // if no error  show:
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
            {/* fluid 讓圖片在Container裡面 */}
          </Col>

          {/* middle part start  */}
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price:${product.price}</ListGroup.Item>
              <ListGroup.Item>
                <br />
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* middle part end  */}

          {/* Add to cart part start  */}
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* && 邏輯運算子AND 假如前面為真 回傳後面 這裡無法使用if  */}
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          // @ts-ignore
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {/* <option> 是用來建立選項，而選項內容放在 <option></option> 標籤裡面。 */}

                          {/* ...Array(product.countInStock) 讓 countInStock 變成一個 Arrray [0,1,2..] */}
                          {/* keys() 把裡面都定義成 相對應的值  */}
                          {[
                            [...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )),
                          ]}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='col-12'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
