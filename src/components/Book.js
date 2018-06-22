import React, { Component } from 'react'
import './Book.css';

class Book extends Component {
    constructor(props) {
        super(props);
        this.editBook = this.bind.editBook;
        this.state = {
            isOpen : false,
        }
    }

    editBook(){
        this.setState({ isOpen: true })
    }

    render() {
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 book-root">
                <div className="cover-img"><img src={ this.props.book.volumeInfo.imageLinks.smallThumbnail }/></div>
                <h4>{ this.props.book.volumeInfo.title }</h4>
                <h5>{ this.props.book.volumeInfo.authors }</h5>
                <h5>{ this.props.book.volumeInfo.publishedDate }</h5>
                <h6>book id { this.props.book.id }</h6> 
                <button className="btn btn-default" onClick="editBook">Edit</button>
                <button className="btn btn-default" onClick="deleteBook">Delete</button>
            </div>

        )
    }
}

export default Book;