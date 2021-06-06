import React, { Component } from 'react'
import { SprintOngoingTask } from '../styled-components/index';

export default class SprintsAdditionContainer extends Component {
    render() {
        return (
            <div data-testid="test-2">
                <div className="container sprints-addition-container">
                    <SprintOngoingTask className='mt-5 mb-2' data-testid="test-3">
                            <div className='minus-sign' data-testid="test-minus-sign">&minus;</div>
                            <p className='text-cetner mt-2' data-testid="test-p-tag">
                                Makieta
                            </p>
                            <div className={`text-center mt-2 points-5`} data-testid='test-points'>
                                5
                            </div>
                    </SprintOngoingTask>
                    
                    <div className="btn btn-outline-success text-end" data-testid="test-submit">Submit the sprint</div>
                </div>
            </div>
        )
    }
}
