import React from 'react';

function CommentList(props) {
    const {comments} = props;
    return (
        <ul>{comments.map(comment =><li key={comment.id}><Comment comment={comment}/></li> )}</ul>
    )
}

function Comment(props) {
    const {content, user, comments} = props.comment;
    return <div>
        <div dangerouslySetInnerHTML={createMarkup(content)} />
        <span>{user}</span>
        {comments.length && <CommentList comments={comments}/>}
    </div>
}

function createMarkup(content) {
    return {__html: content};
  }

export default CommentList;