import React from 'react';
import './style.scss'
const Book = ({ book})=>{
        return (
            <li className='book-item'>
                <div className="book-img">
                    <a>
                        <img className="lazy" src={book.book_cover ? book.book_cover : book.cover} />
                        <span>{book.search_heat ? book.search_heat:book.hh_hot}</span>
                    </a>
                </div>
                <div className="book-info">
                    <h3>
                        <a title={book.bookname ? book.bookname : book.title}>
                            {book.bookname ? book.bookname : book.title}
                        </a>
                    </h3>
                    <p>{book.introduction ? book.introduction:book.desc}</p>
                    <div className="state-box cf">
                        <span>{book.size ? book.size : book.words}</span>
                        <i>{book.class_name ? book.class_name:book.category}</i>
                        <a className="author"  target="_blank">
                            <img className="lazy" src=""/>
                            {book.author_name ? book.author_name : book.author}
                        </a>
                    </div>
                </div>
            </li>
        )
}
        
export default Book;