import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import Comment from './Comment';
import '../BlogFooter.css';


const DisplayComment = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);
  // const [isUpdate, setUpdate] = useState(false);


  // comment functions
  const deleteComment = (newComment) => {
    const newCommentList = commentList.filter(j => newComment !== j);
    setCommentList(newCommentList);
    // setMessage('Comment Deleted Successfully!');
    // setMessageType('success');
  };

  return (
    <div>
      <div style={{ marginTop: '4em' }} className="center">
        {
        (comments.length === 0) ? (
          <div style={{ textAlign: 'center' }}>
            <img alt="nocomments" className="" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/arena_assets_comment_actions.webp" width="200px" />
            <Headline6 className="" style={{ margin: '2px 0px' }}>No Comments</Headline6>
          </div>
        ) : (
          comments.map(newComment => (
            <Comment
              key={newComment._id}
              newComment={newComment}
              deleteComment={deleteComment}
            />

          ))
        )}
      </div>
    </div>
  );
};

DisplayComment.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default DisplayComment;
