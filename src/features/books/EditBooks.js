import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editBooks } from './bookSlice';

const EditBooks = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editBooks({ id, title, author }));
        navigate('/show-books', { replace: true });
    };

    return (
        <div>
            <h2>Edit Book</h2>
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
                    <button type="submit">Edit Book</button>
                </div>
            </form>
        </div>
    );
};

export default EditBooks;
