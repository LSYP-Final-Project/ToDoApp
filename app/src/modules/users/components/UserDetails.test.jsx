import { getByRole, render, screen } from '@testing-library/react'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'
import { UserDetails } from '.'

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
}));

describe('UserDetails', () => {
    const setup = () => {
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
            <Router history={createMemoryHistory()}>
                <UserDetails user={userMock}/>
            </Router>
        )
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
})