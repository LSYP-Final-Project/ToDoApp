import { getByRole, render, screen } from '@testing-library/react'
import { UserCard } from './'

export {}

describe('UserCard', () => {
    
    const setup = () => {
        const userMock = {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "address": {
              "city": "Gwenborough"
            }
        }

        const detailsSpy = jest.fn()
        const tasksSpy = jest.fn()

        render(<UserCard
            user={userMock}
            showUserDetails={detailsSpy}
            showUserTasks={tasksSpy}
        />)

        return { detailsSpy, tasksSpy }
    }

    test('round user badge shows user initials', () => {
        setup()
        const userBadge = screen.getByTestId('user_badge')

        expect(userBadge).toHaveTextContent('LG')
        expect(userBadge).toHaveStyle({borderRadius: '50%'})
    })

    test('card shows information about user', () => {
        setup()

        expect(screen.getByRole('heading')).toHaveTextContent('Leanne Graham')
        expect(screen.getByTestId('user_email')).toHaveTextContent('Sincere@april.biz')
        expect(screen.getByTestId('user_city')).toHaveTextContent('Gwenborough')
    })

    test('Details button emits user id onClick', () => {
        const { detailsSpy } = setup({})

        const detailsBtn = screen.getByRole('button', { name: 'Details', exact: true })
        detailsBtn.click()

        expect(detailsSpy).toHaveBeenCalledWith(1)
    })

    test('Tasks button emits user id onClick', () => {
        const { tasksSpy } = setup({})

        const tasksBtn = screen.getByRole('button', { name: 'Tasks', exact: true })
        tasksBtn.click()

        expect(tasksSpy).toHaveBeenLastCalledWith(1)
    })
})