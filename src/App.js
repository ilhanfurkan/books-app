import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <div
        style={{
          fontSize: "25px",
          height: "50px",
          backgroundColor: "#7c9c85",
          fontWeight: "bold",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Add To Book Archive
      </div>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
