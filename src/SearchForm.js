import React from "react";
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="SearchForm">
      <form id="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-input"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              id="search-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;