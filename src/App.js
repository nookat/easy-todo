import React from 'react';
import {Routes, Route} from 'react-router-dom';
import 'assets/scss/main.scss';

//pages
import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';

// components
import {Header, Footer} from 'components';

const App = () => (
  <div className="ui-wrapper">
    <Header isLogo className="main-header"/>
    <div className="ui-content-wrapper">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    <Footer/>
  </div>
);

export default App;
