import React from 'react'
import { Card } from '../'

export default function CardsView() {
    return (
        <main>
            <Card title={'TaskList (filter by userId)'} />
            <Card title={'TaskList (sort by createDate)'} />
            <Card title={'Comments'} />
        </main>
    )
}
