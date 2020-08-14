// using react 
import React from "react";
import "../styles/search.css";

const Search = (props) => {
    // creating a form that will allow a user to input text
    // as the user inputs text (this is the event change), 
    // it will sort the properties (name)
  return (
    <div className="d-flex justify-content-center mx-auto">
      <form>
        <input
          placeholder="Search for an Employee"
          name="search"
          type="text"
          className="form-control-lg search-font mx-auto"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );
}

export default Search;