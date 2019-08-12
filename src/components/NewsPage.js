import React, {useEffect, useState} from 'react';
import NewsList from './NewsList';
import axios from 'axios';


function NewsPage() {
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
      <NewsList items={items} />
  );
}

export default NewsPage;