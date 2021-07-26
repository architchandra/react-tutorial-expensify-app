import React from 'react';
import { Link } from 'react-router-dom';



const NotFoundPage = () => (
  <div>
    <h2>Page not found</h2>
    <p>Go to the <Link to="/">dashboard</Link>.</p>
  </div>
);
export default NotFoundPage;