import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { changeTitle } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    changeTitle(book.id, title);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div style={{ position: "relative" }}>
      <form className="book-edit" onSubmit={handleSubmit}>
        <input
          placeholder="New Title"
          value={title}
          className=""
          onChange={handleChange}
          style={{
            paddingLeft: "10px",
            borderRadius: "3px",
            boxShadow: "2px 2px 4px #bababa",
            border: "1px solid lightgray",
            top: "-30px",
            position: "absolute",
            width: "150px",
            left: "-75px",
            height: "25px",
          }}
        />
        <button
          className="button is-primary"
          style={{
            height: "25px",
            right: "-80px",
            top: "-5px",
            position: "absolute",
          }}
        >
          Save!
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
