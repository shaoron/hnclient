import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import NewsPage from './components/NewsPage';
import Item from './components/Item';


function App() {

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/news">Home</Link>
          </li>
          <li>
            <Link to="/news/">News</Link>
          </li>
          <li>
            <Link to="/item/3338485">item/3338485</Link>
          </li>
        </ul>
      </nav>

      <Route path="/news" exact component={NewsPage} />
      <Route path="/item/:id" exact component={Item} />
    </div>
  </Router>
  );
}

export default App;