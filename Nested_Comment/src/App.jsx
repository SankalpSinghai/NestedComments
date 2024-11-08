import { useState } from "react";
import { Comment, Action, Text, ReplyComment } from "./Components";
import "./App.css";
import { insertComment, editCommentData, deleteCommentData } from "./utility";


function App({ commentData, setComments }) {
  const [replyComment, setReplyComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState("");

  const handleReply = () => {
    setReplyComment(prev => !prev);
  }

  const handleEdit = () => {
    setEditComment(prev => !prev);
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleDelete = (commentId, commentData) => {
    //TODO 
    const data = deleteCommentData(commentId, commentData)
    console.log(data);
    setComments({ ...data })
  }

  const addComment = (commentId, comment, commentData) => {
    console.log(commentData)
    const data = insertComment(commentId, comment, commentData)
    console.log(data);
    setComments({ ...data })
  }

  const editCommentHandler = (commentId, comment, commentData) => {
    const data = editCommentData(commentId, comment, commentData)
    console.log(data);
    setComments({ ...data })
    handleEdit();
  }

  return (
    <div className="ml-16">
      <>
        {commentData?.content ? (
          <div className="border-2 border-gray-200 rounded-md w-fit mx-auto mt-4">

            {editComment ?
              (<div>
                <Comment value={comment} onChange={handleChange} />
                <Action
                  name="save"
                  onClick={() => { editCommentHandler(commentData.commentId, comment, commentData) }}
                />
                <Action
                  name="cancel"
                  onClick={handleEdit}
                />
              </div>) : (
                <div className="flex gap-2">
                  <Text
                    className="mb-2">
                    {commentData.content}
                  </Text>
                </div>)}
            {!editComment ?
              <ReplyComment
                replyComment={replyComment}
                handleReply={handleReply}
                handleEdit={handleEdit}
                handleDelete={() => { handleDelete(commentData.commentId, commentData) }}
                commentHandler={handleChange}
                comment={comment}
                addComment={() => { addComment(commentData.commentId, comment, commentData) }}
              />
              : null}
          </div>) : (
          <div>
            <Comment
              value={comment}
              onChange={handleChange}
            />
            <Action
              name="Comment"
              onClick={() => { addComment(commentData.commentId, comment, commentData) }}
            />
          </div>
        )}
      </>
      {commentData?.comments?.map((comment) => {
        return <App commentData={comment} setComments={setComments} />
      })}
    </div>
  )
}

export default App;
