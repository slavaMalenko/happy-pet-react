import React from 'react';
import { Route } from 'react-router-dom';

import Header from './component/header/header';
import BaseHome from './pages/BaseHome';

function App() {
  return (
    <div>

      <Header />

      <main className="main">
        <div className="container">
          <Route path="/" exact component={BaseHome} />
        </div>
      </main>

    </div>
  );
}

export default App;
