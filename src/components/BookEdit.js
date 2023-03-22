import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id,title);
    }
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div style={{ position: "relative" }}>
            <form className="book-edit" onSubmit={handleSubmit}>
                <input placeholder="New Title" value={title} className="input" onChange={handleChange} style={{ top: "0px", position: "absolute", width: "150px", left: "5%", height: "25px" }} />
                <button className="button is-primary" style={{ height: "25px", right: "5px", top: "25px", position: "absolute" }}>Save!</button>
            </form>
        </div>
    )
}

export default BookEdit