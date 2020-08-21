import React from "react";
import "./index.css";
// import Book from "./Book";

export default class BookList extends React.Component {
  render() {
    return (
      <div className="book">
        <h2>{this.props.book.volumeInfo.title}</h2>
        <p>Author: {this.props.book.volumeInfo.authors}</p>
        {/* <p>Price: {this.props.book.saleInfo.retailPrice.amount}</p> */}
        <p>{this.props.book.searchInfo.textSnippet}</p>
        <img src={this.props.book.volumeInfo.imageLinks.thumbnail}></img>
        <p id="description">{this.props.book.volumeInfo.description}</p>
      </div>
    );
  }
}
