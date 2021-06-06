import reducer, { addComment, ADD_COMMENT } from "Redux/reducers/comments";
import {
	cleanup,
	getByAltText,
	getByLabelText,
	getByRole,
	render,
	screen,
} from "@testing-library/react";
import CommentsCard from "./CommentsCard";

describe("CommentsCard", () => {
	test("render card with data from props", () => {
		const comment = {
			id: 2,
			userId: 2,
			taskId: 1,
			content: "Good job!",
			createdAt: 16218543932,
		};

		const { getByText } = render(<CommentsCard comment={comment} />);

		expect(getByText(/Good/)).toBeInTheDocument();
	});
});
