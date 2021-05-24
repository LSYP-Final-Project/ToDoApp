import React, { useState } from "react";

const SearchTasks = () => {
	const [searchText, setSearchText] = useState("");

	const onInputSearch = (e) => {
		setSearchText(e.target.value);
	};

	const onSearch = () => {
      if(searchText.length === 0) return;
      console.log(searchText);
      setSearchText("");
   };

	return (
		<div className="input-group mb-3">
			<input
				className="form-control"
				type="text"
				placeholder="Type something"
				value={searchText}
				onChange={onInputSearch}
            autoFocus="true"
			/>
			<button tabindex="0" className="btn btn-primary" onClick={onSearch}>
				Search
			</button>
		</div>
	);
};

export default SearchTasks;
