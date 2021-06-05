import React, { Component } from 'react'
import { SprintOngoingTask } from '../styled-components/index';

export default class SprintsAdditionContainer extends Component {
    render() {
        return (
            <div>
                <div className="container sprints-addition-container">
                    <SprintOngoingTask>
                        <div className="mb-3 mt-5">
                            <div className='minus-sign'>&minus;</div>
                            <p>
                                lorem
                            </p>
                            <div>
                                points
                            </div>
                        </div>
                    </SprintOngoingTask>
                    
                    <div className="btn btn-outline-success text-end">Submit the sprint</div>
                </div>
            </div>
        )
    }
}
