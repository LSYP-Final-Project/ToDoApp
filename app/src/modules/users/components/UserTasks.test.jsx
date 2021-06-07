import { render, screen } from '@testing-library/react'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { UserTasks } from '.'



describe('UserTasks', () => {
    const setup = () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')

        const userMock = {
            "id": 1,
            "name": "Leanne Graham",
        }

        const userTasksMock = [
            {
                "sprintId": 1,
                "description": "First, solve the problem. Then, write the code",
                "userId": 1,
                "id": 1,
                "title": "Make a Karpatka x1",
                "status": "inprogress",
                "createdAt": 1621508357
              },
              {
                "sprintId": 1,
                "description": "Experience is the name everyone gives to their mistakes",
                "userId": 1,
                "id": 2,
                "title": "Becoming a React Master",
                "status": "done",
                "createdAt": 1621858957
              }
        ]

        render(
            <Router history={history}>
                <UserTasks 
                    user={userMock}
                    tasks={userTasksMock}
                />
            </Router>
        )

        return { pushSpy, userTasksMock }
    }

    test('header shows user name', () => {
        setup()
        
        expect(screen.getByText('User\'s tasks', { exact: false })).toHaveTextContent('Leanne Graham')
    })

    test('card shows user tasks', () => {
        const { userTasksMock } = setup({})

        const tasks = screen.getAllByLabelText('Task card')
        expect(tasks).toHaveLength(userTasksMock.length)

        for (let index in tasks) {
            expect(tasks[index]).toHaveTextContent(userTasksMock[index].title)
        }
    })

    test('button emits history push /users onClick', () => {
        const { pushSpy } = setup({})

        const closeBtn = screen.getByRole('button')
        closeBtn.click()

        expect(pushSpy).toHaveBeenCalled()
        expect(pushSpy).toHaveBeenCalledWith('/users')
    })
})