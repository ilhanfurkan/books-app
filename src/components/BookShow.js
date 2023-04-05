import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { removeBook } = useBooksContext();

  const handleDeleteClick = () => {
    removeBook(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div
      className="book-show"
      style={{
        border: "1px solid #7c9c85",
        height: "150px",
        position: "relative",
        boxShadow: "3px 3px 5px #bababa",
        backgroundColor: "white",
      }}
    >
      <div className="action">
        <button
          className="edit"
          style={{
            right: "-215px",
            top: "-10px",
            boxShadow: "1px 3px 3px #bababa",
          }}
          onClick={handleEditClick}
        >
          edit
        </button>
      </div>
      <div className="action">
        <button
          className="delete"
          style={{
            right: "-240px",
            top: "-34px",
            boxShadow: "1px 3px 3px #bababa",
          }}
          onClick={handleDeleteClick}
        >
          delete
        </button>
      </div>

      <img
        style={{
          position: "absolute",
          top: "16px",
          height: "100px",
          width: "75px",
          display: "inline-block",
          boxShadow: "3px 3px 5px #bababa",
        }}
        src={`https://picsum.photos/seed/${book.id}/200/300`}
        alt="bookPhoto"
      />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "35%",
          top: "25%",
          padding: "5px",
          height: "60%",
          overflow: "auto",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default BookShow;
