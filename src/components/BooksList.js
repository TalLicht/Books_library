import React, { Component } from 'react'
import './BooksList.css';

class BooksList extends Component {


    render() {
        return (
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-sm-4" id="mainTitle">
                            <h1 id="booksTitle">Books</h1><br/>
                            <a href="createBook.html">
                                <button className="btn btn-default" id="addBook">Add book</button>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table id="booksTable">
                                <thead>
                                    <tr>
                                    <th scope="col">Book id</th>
                                    <th scope="col">Book title</th>
                                    <th scope="col">Author name</th>
                                    <th scope="col">pubilaction date</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{book.id}</td>
                                        <td>{book.id}</td>
                                        <td>{book.id}</td>
                                        <td>{book.id}</td>
                                        <td><button className="btn btn-default">Edit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
}

export default BooksList;