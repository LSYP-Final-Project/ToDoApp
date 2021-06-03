import React, { useState, useEffect } from 'react'

function SearchBar({onSearch}) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        
        const handleQuery = setTimeout(() => {
            onSearch(query)
        }, 500);

        return () => clearTimeout(handleQuery)
    }, [query])

    return (
        <div>
            <div className="input-group mb-3 mt-2">

                <input type="text" className="form-control" placeholder="Search" id="query_id" autoFocus
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyUp={e => {
                        e.key === 'Enter' && onSearch(query)
                    }}
                />

            </div>
        </div>
    )
}

export default SearchBar