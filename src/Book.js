import React from "react";

export default function Book(props) {
  return (
    <div name="book">
      <h2>Book Title 1 {props.books.volumeInfo.title}</h2>
      <p>Author {props.books.volumeInfo.authors}</p>
      <p>Price: {props.books.saleInfo.listPrice}</p>
      <p>Description {props.books.volumeInfo.description}</p>
    </div>
  );
}
