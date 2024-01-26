import { Textarea } from "@nextui-org/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./page.css";

const CommentForm = ({ handleComment, name, type, id }) => {
  return (
    <div>
      <form action={handleComment}>
        <input className="idInput" name="id" type="text" value={id} />
        <Textarea name={name} type={type} />
        <button>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
