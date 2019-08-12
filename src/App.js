import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios.get('http://node-hnapi.herokuapp.com/news')
        .then(response => {
          console.log(response.data);
          setItems(response.data);
        })
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NewsList items={items} />
      </header>
    </div>
  );
}

export default App;
