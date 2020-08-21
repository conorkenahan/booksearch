import React from "react";
import BookSearch from "./BookSearch";
import BookList from "./BookList";

export default class App extends React.Component {
  state = {
    searchTerm: [""],
    printType: ["all"],
    bookType: [],
    books: [],
    searchURL: "https://www.googleapis.com/books/v1/volumes?q=",
    authors: [],
  };

  searchBooks = (e) => {
    e.preventDefault();
    let searchTerm = encodeURIComponent(e.target.searchForm.value);
    this.setState(
      {
        searchTerm: searchTerm,
      },
      () => {
        this.fetchURL();
      }
    );
  };

  fetchURL() {
    fetch(
      this.state.searchURL +
        this.state.searchTerm +
        "&" +
        this.state.printType +
        "&" +
        this.state.bookType
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          books: res.items,
        })
      );
  }

  printTypeFilter = (e) => {
    let printTypeFilter = e.target.value;
    this.setState({
      printType: printTypeFilter,
    });
  };
  bookTypeFilter = (e) => {
    let bookTypeFilter = e.target.value;
    this.setState({
      bookType: bookTypeFilter,
    });
  };

  testing = () => {
    console.log(this.state.books);
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
          <BookSearch
            searchBooks={this.searchBooks}
            printTypeFilter={this.printTypeFilter}
            bookTypeFilter={this.bookTypeFilter}
          />
        </header>
        <section name="BookList">
          {this.state.books.map((book, i) => (
            <BookList key={i} index={i} book={book} />
          ))}
        </section>

        <button onClick={this.testing}>test me!</button>
      </div>
    );
  }
}
