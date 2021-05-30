import React from 'react'
import { TaskCard } from '../../../core/components'

export default function TasksList({ title, tasks }) {
    return (
        <article className="main-page__task-list card shadow-sm border-light rounded-0">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {tasks.length && tasks.map(t => <TaskCard key={t.id} task={t} />)}
            </div>
        </article>
    )
}
