import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './bookSlice';
const { v4: uuidv4 } = require('uuid');

const AddBooks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: uuidv4(), title: title, author: author };
        dispatch(addBooks(newBook));
        navigate('/show-books', { replace: true });
    };

    return (
        <div>
            <h2>Add New Books</h2>
            <form className="form-div" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="title" id="title" value={title} required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author : </label>
                    <input type="text" name="author" id="author" value={author} required onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="Fsubmit-btn">
                    <button type="submit">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;
