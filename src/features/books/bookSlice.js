import { createSlice } from '@reduxjs/toolkit';
const { v4: uuidv4 } = require('uuid');

const initialBooks = {
    books: [
        { id: uuidv4(), title: 'Love Bangladesh', author: 'Zahurul Islam' },
        { id: uuidv4(), title: 'Love America', author: 'Jahangir Alam' }
    ]
};

export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state, action) => {
            return state.books;
        },
        addBooks: (state, action) => {
            const newBook = action.payload;
            state.books.push(newBook);
        },
        deleteBooks: (state, action) => {
            const ID = action.payload;
            const filterdBooks = state.books.filter((book) => book.id !== ID);
            state.books = filterdBooks;
        },
        editBooks: (state, action) => {
            const { id, title, author } = action.payload;
            state.books
                .filter((book) => book.id === id)
                .map((selected) => {
                    selected.title = title;
                    selected.author = author;
                });
        }
    }
});

export const { showBooks, addBooks, deleteBooks, editBooks } = bookSlice.actions;

export default bookSlice.reducer;
