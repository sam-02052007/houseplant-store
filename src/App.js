import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
