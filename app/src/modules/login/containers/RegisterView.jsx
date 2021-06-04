import React from 'react'
import StyledNotice from 'Core/styledComponents/Notice'
import RegisterForm from '../components/RegisterForm'

export default function RegisterView() {

    return (
        <main className="d-flex flex-column flex-lg-row px-2">
            <div className="col-lg-6 m-3">
                <RegisterForm />
            </div>
            <div className="col-lg-6 m-3">
                <StyledNotice title='Why register?' content='A registered user can manage his tasks and track tasks and progress' />
            </div>
        </main>
    )
}
