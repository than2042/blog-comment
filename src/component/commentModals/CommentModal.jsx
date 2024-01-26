"use client";
import { useState } from "react";
import CommentForm from "./CommentForm";

const CommentModal = ({ handleComment, id, name, type }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setModalShow(!modalShow);
        }}
      >
        Comment
      </button>
      {modalShow && (
        <CommentForm
          handleComment={handleComment}
          id={id}
          name={name}
          type={type}
        />
      )}
    </div>
  );
};

export default CommentModal;
