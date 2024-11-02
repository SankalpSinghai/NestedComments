const Comment = ({ value, onChange }) => {
    return <input type="text" className="border-gray-200 border-2 p-1" placeholder="Enter your comment" value={value ? value : ''} onChange={onChange} />
}

export default Comment;