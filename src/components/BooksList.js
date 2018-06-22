import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book'
import './BooksList.css';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          books: []
        };

      }
    
    componentDidMount() {
        axios({
            url: `https://www.googleapis.com/books/v1/volumes?q=all&key=AIzaSyBOquKH-n3kssrGmWYX8dfJjWPaA71DvBo`,
            method: 'GET'
          })
        .then(res => res.data)
        .then(res => {
            this.setState({ books: res.items });
          })
      }

    render() {

        return (
                <div className="container-fluid text-center library-root">
                    <div className="row">
                        <div className="col-xs-12" id="main-title">
                            <h1 id="books-title">Books</h1><br/>
                            <a href="createBook.html">
                                <button className="btn btn-default" id="addBook">+</button>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                            {this.state.books.map(book => {
                                return <Book key={'book-' + book.id} book={book}/>;
                            })}
                    </div>
                </div>
            );
        }
}

export default BooksList;