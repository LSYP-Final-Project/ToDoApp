import React, { Component } from 'react'
import { SprintOngoingTask } from '../styled-components/index';

export default class SprintsAdditionContainer extends Component {
    render() {
        return (
            <div>
                <div className="container sprints-addition-container">
                    <SprintOngoingTask className='mt-5 mb-2'>
                            <div className='minus-sign'>&minus;</div>
                            <p className='text-cetner mt-2'>
                                Makieta
                            </p>
                            <div className='text-center mt-2'>
                                5
                            </div>
                    </SprintOngoingTask>
                    
                    <div className="btn btn-outline-success text-end">Submit the sprint</div>
                </div>
            </div>
        )
    }
}
