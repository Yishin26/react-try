// Import the React and ReactDOM Libraries
import React from "react";

/*function getButtonText(){
    return 'Click on me';
}*/

// Create a react component
const CommentDetail = props => {
  return (
    <div >
      <div className="ui comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>
            <div className="metadata">
              <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;