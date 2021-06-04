import React from 'react'
import StyledNotice from 'Core/styledComponents/Notice'
import RegisterForm from '../components/RegisterForm'

export default function RegisterView() {
    // const userTasks = useSelector(getUserTasks);
    // const latestTasks = useSelector(getLatestTasks);
    // const latestComments = useSelector(getLatestComments);

    return (
        <main className="d-flex flex-column flex-lg-row px-2">
            <div className="col-lg-6 m-3">
                <RegisterForm />
            </div>
            <div className="col-lg-6 m-3">
                <StyledNotice title='Why register?' content='You have to register to view your tasks' />
            </div>
        </main>
    )
}
