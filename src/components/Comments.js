import React from "react"
import NewCommentForm from "./NewCommentForm"
import CommentsList from "./CommentsList"

const Comments = ({ comments, onCommentSubmit }) => {
  const commentSubmitHandler = (commentText) => {
    onCommentSubmit(commentText)
  }
  return (
    <>
      <NewCommentForm onCommentSubmit={commentSubmitHandler} />
      <CommentsList comments={comments} />
    </>
  )
}

export default Comments
