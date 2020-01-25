import axios from "axios";

const queryUrl = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    
    searchBooks: (query) => axios.get(queryUrl + query),
    
    getBooks: () => axios.get("/api/books"),
  
    saveBook: (bookData) => axios.post("/api/books", bookData),
    
    deleteBook: (id) => axios.delete("api/books/" + id)
};