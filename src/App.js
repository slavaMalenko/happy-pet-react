import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from './component/header/header';
import AboutUs from './pages/AboutUs';
import BaseHome from './pages/BaseHome';
import Contacts from './pages/Contacts';
import Friends from './pages/Friends';

function App() {
  const state = useSelector(({ cart }) => {
    return {
      totalPrice: cart.totalPrice
    }
  })

  return (
    <div>
      <Header totalPrice={state.totalPrice} />

      <main className="main">
        <div className="container">
          <Route path="/" exact component={BaseHome} />
          <Route path="/friends" exact component={Friends} />
          <Route path="/service" exact component={AboutUs} />
          <Route path="/contacts" exact component={Contacts} />
        </div>
      </main>
    </div>
  );
}

export default App;
