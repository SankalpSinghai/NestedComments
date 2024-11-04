import Action from "./Action";
import Comment from "./Comment";
const ReplyComment = ({ replyComment, handleReply, handleDelete, handleEdit, addComment, comment, commentHandler }) => {
    return (
        <>
            {replyComment ? (
                <div>
                    <Comment value={comment} onChange={commentHandler} />
                    <Action name="cancel" onClick={handleReply} />
                    <Action name="comment" onClick={addComment} />
                </div>) : (<div className="flex gap-2">
                    <Action name="Reply" onClick={handleReply} />
                    <Action name="Edit" onClick={handleEdit} />
                    <Action name="Delete" onClick={handleDelete} />
                </div>)}
        </>
    )
}

export default ReplyComment;