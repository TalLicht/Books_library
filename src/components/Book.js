import React, { Component } from 'react'
import './Book.css';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          books: []
        };
      }
    
    componentDidMount() {
    fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            isLoaded: true,
            books: result
            });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
            return(
                <div>
                    {books.map(item => (
                        key={book.id}>
                        {book.id} {book.author_name} {book.published_date}
                    ))}
                </div>
            )