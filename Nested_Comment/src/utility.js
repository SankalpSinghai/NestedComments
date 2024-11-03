let commentInserted = false;
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const insertComment = (commentId, comment, data) => {
  const newComment = {
    commentId: generateUUID(),
    content: comment,
    comments: [],
  };
  if (Object.keys(data).length === 0) {
    return newComment;
  }
  if (data.commentId == commentId) {
    data.comments.push(newComment);
    commentInserted = true;
    return data;
  }
  for (let i = 0; i < data.comments.length; i++) {
    if (commentInserted) {
      return data;
    }
    insertComment(commentId, comment, data.comments[i]);
  }
  return data;
};

export const deleteCommentData = (commentId, data) => {
  for (let i = 0; i < data.comments.length; i++) {
    if (commentId === data.comments[i].commentId) {
      data.comments.splice(i, 1);
      return data;
    } else {
      deleteCommentData(commentId, data.comments[i]);
    }
  }
  return data;
};

export const editCommentData = (commentId, comment, data) => {
  if (data.commentId == commentId) {
    data.content = comment;
  }
  for (let i = 0; i < data.comments.length; i++) {
    editCommentData(commentId, comment, data.comments[i]);
  }
  return data;
};