import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          {/* 沒有  exact path /後面接甚麼都可以還是會到 HomeScreen*/}
          <Route path='/product/:id' component={ProductScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;