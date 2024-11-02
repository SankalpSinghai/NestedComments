import Action from "./Action";
import Comment from "./Comment";
const ReplyComment = ({ replyComment, handleReply, handleDelete, handleEdit }) => {
    return (
        <>
            {replyComment ? (
                <div>
                    <Comment />
                    <Action name="cancel" onClick={handleReply} />
                    <Action name="comment" />
                </div>) : (<div className="flex gap-2">
                    <Action name="Reply" onClick={handleReply} />
                    <Action name="Edit" onClick={handleEdit} />
                    <Action name="Delete" onClick={handleDelete} />
                </div>)}
        </>
    )
}

export default ReplyComment;