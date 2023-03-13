import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from 'layouts';

const NotFoundPage = () => (
  <Container>
    <h1 className="ui-title-1">Not found page</h1>
    <p>Please go to Home page: <Link to="/">Link</Link></p>
  </Container>
);

export default NotFoundPage;