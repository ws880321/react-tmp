import React from "react";
import PropTypes from 'prop-types'
import Book  from "./book";
import "./booklist.scss";

const BookList=({books})=>(
    <ul className="book-list">
        {books.map(item => <Book key={item.bid} book={item}/>)}
    </ul>
)
BookList.propTypes = {
    books: PropTypes.array.isRequired
}
export default BookList;