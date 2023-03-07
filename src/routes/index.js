import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from '../features/books/AddBooks';
import BooksView from '../features/books/BooksView';
import EditBooks from '../features/books/EditBooks';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-books" element={<BooksView />} />
                    <Route path="/add-books" element={<AddBooks />} />
                    <Route path="/edit-books" element={<EditBooks />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;
