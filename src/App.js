import React from 'react';
import { Route } from 'react-router-dom';

import Header from './component/header/header';
import BaseHome from './pages/BaseHome';
import Friends from './pages/Friends';

function App() {
  return (
    <div>

      <Header />

      <main className="main">
        <div className="container">
          <Route path="/" exact component={BaseHome} />
          <Route path="/friends" exact component={Friends} />
        </div>
      </main>

    </div>
  );
}

export default App;
