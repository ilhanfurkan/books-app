import { useState } from "react";

const BookCreate = ({ onSubmit }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(title);
        setTitle('');
    }
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div className="book-create" style={{height:"220px",zIndex:"100",backgroundColor:"#7c9c85"}} >
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}  />
                <button className="button" >Create!</button>
            </form>
        </div>
    )
}

export default BookCreate