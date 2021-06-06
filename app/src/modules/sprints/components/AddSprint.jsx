import React from 'react'
import SprintsAdditionContainer from './SprintsAdditionContainer';
import { Link } from 'react-router-dom';
export default function AddSprint() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Describe the task</h1>
                        <form>
                            <div class="form-group">
                                <label for="task-description">Task description</label>
                                <textarea class="form-control" id='task-description' rows="3"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="points">Points</label>
                                <select class="form-control" id="points">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </form>
                        <div className="btn btn-outline-primary">Add</div>
                    </div>
                        <div className="col-6 mt-5">
                            <SprintsAdditionContainer />
                        </div>
                </div>

                <Link to='/sprints' className="btn btn-danger mt-2">Cancel</Link>
            </div>
        </>
    )
}
