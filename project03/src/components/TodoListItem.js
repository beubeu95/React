import { IoMdRemoveCircleOutline } from "react-icons/io";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import cn from "classnames";

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      <div className="remove">
        <IoMdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
