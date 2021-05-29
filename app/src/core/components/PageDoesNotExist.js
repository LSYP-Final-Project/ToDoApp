import React from 'react'

function PageDoesNotExist() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 errorMessage'>
                        <h1>404 ERROR</h1>

                        <h4>page does not exist.</h4>

                        <button type="button" class="btn btn-primary m-5" >
                            <a href="/users">Take me back</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageDoesNotExist
