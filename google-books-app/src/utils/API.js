import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const KEY = "AIzaSyBcLO2-adApNYMMqnyC2_GPrBsS_l9hb3A";


export default {
  // Gets all books from Google API
  getBooks: function() {
    let query = this.state.query;
    return axios.get(BASEURL + query)
    // "/api/google", { params: { q: "title" + q } }
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
