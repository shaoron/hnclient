import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import CommentList from "./Commentlist";

function Item({ match }) {
  const [items, setItems] = useState([]);
  const id = match.params.id;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://node-hnapi.herokuapp.com/item/" + id)
        .then(response => {
          console.log(response.data);
          setItems(response.data);
        });
    };
    fetchData();
  }, [id]);

  if(items.length === 0) return <div></div>

  return (
    <div>
      <NewsItem item={items} />
      <CommentList comments={items.comments} />
    </div>
  );
}

export default Item;
