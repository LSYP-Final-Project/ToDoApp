import reducer, { addComment, ADD_COMMENT } from "Redux/reducers/comments";
import { cleanup, getByAltText, getByLabelText, getByRole, render, screen } from '@testing-library/react'

describe("DetailsTask", () => {
	test("emits event on click add button", () => {
      
		const comment = {
			id: 2,
			userId: 2,
			taskId: 1,
			content: "Good job!",
			createdAt: 16218543932,
		};
      expect(
         reducer(
            {
               comments: [{
                  id: 1,
                  userId: 2,
                  taskId: 1,
                  content: "Good job!",
                  createdAt: 16218534932,
               }]
            },
           {
             type: ADD_COMMENT,
             comment
           }
         )
       ).toEqual([
         {
            id: 1,
            userId: 2,
            taskId: 1,
            content: "Good job!",
            createdAt: 16218534932,
         },
         {
            id: 2,
            userId: 2,
            taskId: 1,
            content: "Good job!",
            createdAt: 16218543932,
         }
       ])
     })
   
	test("shows details", () => {
      expect(screen.queryByText("Details")).toBeInTheDocument();
   });

	test.todo("shows comments");

	test.todo("shows form on click add comment");
});
