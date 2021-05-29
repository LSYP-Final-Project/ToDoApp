import React from 'react'
import StyledAddButton from './StyledAddButton.style'
import StyledFinishedContainer from './StyledFinishedContainer.style'
import StyledOngoingContainer from './StyledOngoingContainer.style'
import StyledText from './StyledText.style'




function SprintsView() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <StyledAddButton>
                            <div className="plusSignWrapper">
                                <div className='plusSign'></div>
                            </div>
                            <p>Add Sprint</p>
                        </StyledAddButton>
                    </div>
                        <div className="col-4">{/* PLACEHOLDER NA TYTUŁ 'KLIKNIĘTEGO' SPRINTU */}</div>
                        <div className='col-1'></div>
                        <div className="col-4 text-center"><h1 className='text-secondary'>BACKLOG</h1></div>
                        <div className='col-1'></div>
                </div>

                <div className="row mt-2">
                    <div className="col-2">
                        <StyledOngoingContainer>
                            <p>ongoing</p>

                            {/* wstawić funkcję drukującą ongoing sprints */}

                        </StyledOngoingContainer>

                        <StyledFinishedContainer>
                            <p>finished</p>

                            {/* wstawić funkcję drukującą finished sprints */}

                        </StyledFinishedContainer>

                    </div>
                    <div className="col-4 border border-darken-1">
                        
                    </div>
                    <div className='col-1'></div>
                    <div className="col-4 border border-darken-1">
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>



)
}

export default SprintsView
