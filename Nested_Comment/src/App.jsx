import { useState } from "react";
import { Comment, Action, Text, ReplyComment } from "./Components";
import "./App.css";


function App({ commentData }) {
  const [replyComment, setReplyComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState(commentData.content || "");
 
  const handleReply = () => {
    console.log('Got called!');
    setReplyComment(prev => !prev);
  }

  const handleEdit = () => {
    setEditComment(prev => !prev);
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleDelete = () => {
    //TODO 
  }

  return (
    <div className="ml-16">
      <>
        {commentData?.content ? (
          <div className="border-2 border-gray-200 rounded-md w-fit mx-auto mt-4">
           
            {editComment ?
              (<div>
                <Comment value={comment} onChange={handleChange} />
                <Action name="save" />
                <Action name="cancel" onClick={handleEdit} />
              </div>) : (
                <div className="flex gap-2">
                   <Text className="mb-2">{commentData.content}</Text>
                </div>)}
            {!editComment ? <ReplyComment replyComment={replyComment} handleReply={handleReply} handleEdit={handleEdit} handleDelete={handleDelete} /> : null}
          </div>) : (
          <div>
            <Comment />
            <Action name="Comment" />
          </div>
        )}
      </>
      {commentData?.comments?.map((comment) => {
        return <App commentData={comment} />
      })}
    </div>
  )
}

export default App;
