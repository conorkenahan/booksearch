import React from "react";

export default function BookSearch(props) {
  return (
    <section name="BookSearch">
      <form onSubmit={(e) => props.searchBooks(e)}>
        <input
          name="searchForm"
          type="text"
          placeholder="ex. Henry, etc."
          aria-label="enter search term"
        ></input>
        <button type="submit">Search</button>
      </form>
      <section name="filters">
        <h2>Print Type:</h2>
        <select name="printType" onChange={(e) => props.printTypeFilter(e)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <h2>Book Type:</h2>
        <select name="bookType" onChange={(e) => props.bookTypeFilter(e)}>
          <option value="">No Filter</option>
          <option value="filter=free-ebooks">Free</option>
          <option value="filter=full">Full Text</option>
        </select>
      </section>
    </section>
  );
}
