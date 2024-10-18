import { IoMdAdd } from "react-icons/io";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요." />
      <button type="submit">
        <IoMdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
