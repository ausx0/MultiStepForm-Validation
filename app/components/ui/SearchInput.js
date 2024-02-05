import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#F3F3F3",
        borderRadius: "5px",
        padding: "5px",
        width: "200px",
      }}
    >
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        style={{
          border: "none",
          background: "#F3F3F3",
          fontSize: "11px",

          marginLeft: "5px",
          outline: "none",
          width: "100%",
        }}
      />
    </div>
  );
};

export default SearchInput;
