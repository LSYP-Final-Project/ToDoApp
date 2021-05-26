import React, { useState } from "react";
import styled from "styled-components";

const RowFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

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
			<RowFlex className="mb-5">
				<RowFlex>
					<h5 className="col-6">Filter by:</h5>
					<select className="form-select col-6" >
						<option defaultValue value="">
                  Select filter type
						</option>
						<option value="title">Title</option>
						<option value="userId">UserId</option>
						<option value="Status">Status</option>
					</select>
				</RowFlex>
				<RowFlex>
					<h5 className="col-4">Sort by:</h5>
					<button className="btn btn-outline-primary mx-1">Name</button>
					<button className="btn btn-outline-primary mx-1">UserId</button>
					<button className="btn btn-outline-primary mx-1">Completed</button>
				</RowFlex>
			</RowFlex>
		</>
	);
};

export default SearchTasks;
