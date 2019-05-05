import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
           this.setState({ books: books })
         })
     
  }
{ /*moveShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);
       BooksAPI.getAll().then((books) => {
           this.setState({ books: books })
         }) */
  } 
  
  BooksAPI.update(book,shelf).then(()=>{
 BooksAPI.getAll().then((books)=>{
  this.setState({ books: books})
 })
})
  

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
      <Route exact path="/" render={() => (
        <MainPage 
        books={this.state.books}
        moveShelf={this.moveShelf}/>
        )}/>

      <Route exact path="/search" render={() => (
        <SearchPage 
        moveShelf={this.moveShelf}
         books={this.state.books}
        />
        )}/>
      </div>
    )
  }
}

export default BooksApp
