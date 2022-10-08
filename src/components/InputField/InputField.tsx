import { useRef } from "react";
import "./InputField.scss";

// Set interface to define type for props
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  // useRef hook for input field focus
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className="input" onSubmit={(e) => {
      handleAddTodo(e)
      // Shifts focus from the input box, so page shadow disappears
      inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        className="input__box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputField;
