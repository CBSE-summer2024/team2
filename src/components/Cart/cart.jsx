import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../../main.css';
import data from '../../../data.json'; 

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
   
    setCartItems(data.product || []); 
  }, []);

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={12}>
          <h2>سلة المشتريات</h2>
          {cartItems.length === 0 ? (
            <p>سلة المشتريات فارغة</p>
          ) : (
            <div>
              {cartItems.map(item => (
                <Card key={item.id} className="mb-3 cart-card">
                  <Row noGutters>
                    <Col md={3}>
                      <Card.Img variant="top" src={item.image} alt={item.name} className="cart-image" />
                    </Col>
                    <Col md={9}>
                      <Card.Body>
                        <Row>
                          <Col md={6}>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                              السعر: {item.price} شيكل
                            </Card.Text>
                          </Col>
                          <Col md={3}>
                            <Form.Group controlId={`quantity-${item.id}`}>
                              <Form.Label>الكمية</Form.Label>
                              <Form.Control
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, e)}
                                min="1"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={3} className="text-end">
                            <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                              حذف
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
              <Row className="mt-3">
                <Col md={12} className="text-end">
                  <h4>الإجمالي: {calculateTotal()} شيكل</h4>
                  <Button variant="primary">إتمام الطلب</Button>
                </Col>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
