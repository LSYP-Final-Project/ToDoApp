import { render } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import TaskCard from "./TaskCard";
import { Router } from 'react-router-dom'

jest.mock('react-redux', () => ({
	useDispatch: jest.fn()
}));

describe("TaskCard", () => {

	const mockTask = {
		id: 1,
		userId: 2,
		title: "Code is like humor. When you have to explain it, it’s bad.",
		description: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
		createdAt: 1623006733218,
	};

	const setup = () => {
		const history = createMemoryHistory()
		const { getByText } = render(<Router history={history}><TaskCard key={mockTask.id} data={mockTask} /></Router>)
		return { getByText }
	}

	test("shows the title of the task", () => {
		const { getByText } = setup()
		expect(getByText(/Code is like humor/)).toBeInTheDocument()
	});

});
