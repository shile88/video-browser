import "../assets/styles/SearchBar.css";

import React, { useRef } from "react";

const SearchBar = ({ search, setSearch }) => {
  const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchRef.current.value);
  };

  return (
    <div className="ui two column grid">
      <div className="four wide column">
        <div className="logo">
          <i className="huge red youtube icon"></i>
          YouTube browser
        </div>
      </div>
      <div className="twelve wide column">
        <div className="ui fluid category search">
          <form className="ui icon input" onSubmit={handleSubmit}>
            <input
              className="prompt"
              type="text"
              placeholder="Search videos..."
              ref={searchRef}
            />
            <i className="search icon"></i>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
