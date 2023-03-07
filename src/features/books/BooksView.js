import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBooks } from './bookSlice';

const BooksView = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.bookReducer.books);

    const handleDelete = (id) => {
        dispatch(deleteBooks(id));
    };

    return (
        <div>
            <h2>List OF Books</h2>
            <section className="tableSection">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books &&
                            books.map((book) => {
                                const { id, title, author } = book;
                                return (
                                    <tr key={id}>
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>
                                            <button onClick={() => handleDelete(id)}>Delete</button>
                                            <Link to={'/edit-books'} state={{ id, title, author }}>
                                                <button>Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default BooksView;
