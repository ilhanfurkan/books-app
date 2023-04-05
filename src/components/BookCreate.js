import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div
      className="book-create"
      style={{ height: "200px", zIndex: "100", backgroundColor: "#7c9c85" }}
    >
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
