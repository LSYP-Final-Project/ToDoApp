import React from 'react'

export default class UserDetails extends React.Component {
    state = {}

    render() {
        return (
            <div className="card mt-3">
                
                <div className="card-header bg-white">
                    <h4>User's details - <b>Leanne Graham</b></h4>
                    <span>&amp;times</span>
                </div>
        
                <div className="card-body">
                    <dl>
                        <dt>Username:</dt>
                        <dd aria-label="Playlist Name">Name</dd>
        
                        <dt>Phone number:</dt>
                        <dd>66666666</dd>
        
                        <dt>Website:</dt>
                        <dd>wedjeoijd.com</dd>

                        <dt>Company:</dt>
                        <dd>Google</dd>
                    </dl>
                </div>
        
            </div>
        )
    }
}