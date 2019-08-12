import React from 'react';
import NewsItem from './NewsItem';

function NewsList(props) {
    const { items } = props;
    return <ul>
        {items.map(item => <li key={item.id}> <NewsItem item={item} /> </li>)}
    </ul>
}

export default NewsList;