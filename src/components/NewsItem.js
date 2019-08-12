import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NewsItem(props) {
    const { id, title, url, user, comments_count, points } = props.item;
    return (
        <div>
            <a href={url}>{title}</a>
            <p>author {user}</p>
            <p>comments {comments_count}</p>
            <p>points {points}</p>
            <Link to={"/item/" + id}> Discuss </Link>
        </div>
    );
}

export default NewsItem;