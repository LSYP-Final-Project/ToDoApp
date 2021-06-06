import { render, screen } from '@testing-library/react'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { UserDetails } from '.'

describe('UserDetails', () => {
    const setup = () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')

        const userMock = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona"
            }
        }

        render(
            <Router history={history}>
                <UserDetails user={userMock}/>
            </Router>
        )

        return { pushSpy }
    }

    test('header shows user name', () => {
        setup()

        expect(screen.getByRole('heading')).toHaveTextContent('Leanne Graham')
    })

    test('card shows user details', () => {
        setup()

        expect(screen.getByLabelText('Username')).toHaveTextContent('Bret')
        expect(screen.getByLabelText('User phone number')).toHaveTextContent('1-770-736-8031 x56442')
        expect(screen.getByLabelText('User website')).toHaveTextContent('hildegard.org')
        expect(screen.getByLabelText('User company')).toHaveTextContent('Romaguera-Crona')
    })

    test('button emits history push /users onClick', () => {
        const { pushSpy } = setup({})

        const closeBtn = screen.getByRole('button')
        closeBtn.click()

        expect(pushSpy).toHaveBeenCalled()
        expect(pushSpy).toHaveBeenCalledWith('/users')
    })
})