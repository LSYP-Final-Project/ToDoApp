import React from 'react'
import { UsersList } from '../components/UsersList'


export const UsersView = () => {

    const mockUsers = [
        {
            id: 1,
            name: "Jake Burton",
            email: "exampleuser@example.com",
            city: "Warsaw"
        },
        {
            id: 2,
            name: "Ben Howard",
            email: "exampleuser2@example.com",
            city: "Dublin"
        },
        {
            id: 3,
            name: "John Doe",
            email: "exampleuser3@example.com",
            city: "Warsaw"
        },
        {
            id: 4,
            name: "Leanne Graham",
            email: "exampleuser4@example.com",
            city: "Cracow"
        },
        {
            id: 5,
            name: "Will Bohmer",
            email: "exampleuser5@example.com",
            city: "Whippany"
        },
        {
            id: 6,
            name: "Carl Digglet",
            email: "exampleuser6@example.com",
            city: "Seoul"
        }
    ]

    return (
        <div>
            <UsersList users={mockUsers}/>
        </div>
    )
}