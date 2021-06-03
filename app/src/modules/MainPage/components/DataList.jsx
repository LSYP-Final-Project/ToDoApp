import React from 'react'

export default function DataList({ title, data, Card }) {
    return (
        <article className="main-page__task-list card shadow-sm border-light rounded-0">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {data?.length && data.map(t => <Card key={t.id} data={t} />)}
            </div>
        </article>
    )
}
