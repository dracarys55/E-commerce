import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

/*  match, location ，須確定回傳何值 */
const CartScreen = ({ match, location }: any) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  console.log(qty);

  const dispatch = useDispatch();
  // @ts-ignore
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  // @ts-ignore
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  // @ts-ignore
  const qtyControl = (item) => {
    return (
      <Form.Control
        as='select'
        value={item.qty}
        onChange={(e) =>
          dispatch(addToCart(item.product, Number(e.target.value)))
        }
      >
        {[
          [...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          )),
        ]}
      </Form.Control>
    );
  };
  // @ts-ignore
  const cartItemsDisplay = cartItems.map((item) => {
    return (
      <ListGroup.Item key={item.product}>
        <Row>
          <Col md={2}>
            <Image src={item.image} alt={item.name} fluid rounded />
          </Col>
          <Col md={3}>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
          </Col>
          <Col md={2}>${item.price}</Col>
          <Col>{qtyControl(item)}</Col>
          <Col>
            <Button
              type='button'
              variant='light'
              onClick={() => removeFromCartHandler(item.product)}
            >
              <i className='fas fa-trash ' />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  });

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>{cartItemsDisplay}</ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroup.Item>
              {/* reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入函式  將陣列化為單一值*/}
              <h2>
                {/*  @ts-ignore */}
                Subtotal({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                )items
              </h2>
              $
              {cartItems
                // @ts-ignore
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='col-12'
                disabled={cartItems.length === 0}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
