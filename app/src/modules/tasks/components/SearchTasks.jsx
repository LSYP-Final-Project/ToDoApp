import React, { useState } from "react";

const SearchTasks = () => {
	const [searchText, setSearchText] = useState("");

	const onInputSearch = (e) => {
		setSearchText(e.target.value);
	};

	const onSearch = () => {
		if (searchText.length === 0) return;
		console.log(searchText);
		setSearchText("");
	};

	return (
		<>
			<div className="input-group mb-3">
				<input
					className="form-control"
					type="text"
					placeholder="Type something"
					value={searchText}
					onChange={onInputSearch}
					autoFocus={true}
				/>
				<button tabIndex="0" className="btn btn-primary" onClick={onSearch}>
					Search
				</button>
			</div>
			<div className="row mb-5">
				<div className="col-sm mb-3">
					<p>Filter by:</p>
					<select className="form-select">
						<option defaultValue value="">
							Select filter type
						</option>
						<option value="title">Title</option>
						<option value="userId">UserId</option>
						<option value="Status">Status</option>
					</select>
				</div>
				<div className="col-sm">
					<p>Sort by:</p>
					<button className="btn btn-outline-primary mr-1">Name</button>
					<button className="btn btn-outline-primary mx-1">UserId</button>
					<button className="btn btn-outline-primary ml-1">Completed</button>
				</div>
			</div>
		</>
	);
};

export default SearchTasks;