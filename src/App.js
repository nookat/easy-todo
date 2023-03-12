import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './assets/scss/main.scss';

import {Header, Footer} from './components';
import {Container} from './layouts';

const App = () => (
  <div className="ui-wrapper">
    <Header isLogo className="main-header"/>
    <div className="ui-content-wrapper">
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}/>
          <Route path="/about" element={<h1>About page</h1>}/>
        </Routes>
      </Container>
    </div>
    <Footer/>
  </div>
);

export default App;
