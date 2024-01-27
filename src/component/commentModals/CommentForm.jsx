import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./page.css";

const CommentForm = ({ handleComment, name, type, id }) => {
  return (
    <div>
      <form className="commentForm" action={handleComment}>
        <input className="idInput" name="id" type="hidden" value={id} />
        <textarea className="commentText" name={name} type={type} />
        <button className="commentSend">
          <FontAwesomeIcon icon={faForward} />
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
