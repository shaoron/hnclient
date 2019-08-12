import React from 'react';

function NewsItem(props) {
    const { title, url, user, comments_count, points } = props.item;
    return (
        <div>
            <a href={url}>{title}</a>
            <p>author {user}</p>
            <p>comments {comments_count}</p>
            <p>points {points}</p>
        </div>
    );
}

export default NewsItem;