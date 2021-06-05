import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTodos, sortTodos } from "Redux/reducers/todos";


const SearchTasks = () => {
	const dispatch = useDispatch();

	const [searchText, setSearchText] = useState("");
	const [filterType, setFilterType] = useState("All");

	const onInputSearch = (e) => {
		setSearchText(e.target.value);
	};

	const onSearch = () => {
		dispatch(searchTodos(searchText, filterType));
	};

	const onSort = (e) => {
		dispatch(sortTodos(e.target.value));
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
					onKeyUp={e => e.key === 'Enter' && onSearch()}
					autoFocus={true}
				/>
				<button tabIndex="0" className="btn btn-primary" onClick={onSearch}>
					Search
				</button>
			</div>
			<div className="row mb-5">
				<div className="col-sm mb-3">
					<p>Filter by:</p>
					<select className="form-select" onChange={(e) => setFilterType(e.target.value)} value={filterType}>
						<option value="q">All</option>
						<option value="title">Title</option>
						<option value="userId">UserId</option>
						<option value="status">Status</option>
					</select>
				</div>
				<div className="col-sm">
					<p>Sort by:</p>
					<button className="btn btn-outline-primary mr-1" onClick={onSort} value="title">Name</button>
					<button className="btn btn-outline-primary mx-1" onClick={onSort} value="userId">UserId</button>
					<button className="btn btn-outline-primary ml-1" onClick={onSort} value="status">Completed</button>
				</div>
			</div>
		</>
	);
};

export default SearchTasks;
