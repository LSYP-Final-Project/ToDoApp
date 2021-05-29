import React from 'react'
// import { useForm } from "react-hook-form";

function RegisterForm() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card m-3 w-75">
                <h5 className="card-header">Create account</h5>
                <div className="card-body">
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label" for="inputEmail">Email</label>
                                <input className="form-control" name="email" type="text" id="inputEmail" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label" for="inputPassword">Password</label>
                                <input className="form-control" name="password" type="password" id="inputPassword" required />
                            </div>
                            <div className="col">
                                <label className="form-label" for="inputConfirmPassword">Confirm Password</label>
                                <input className="form-control" name="confirmPassword" type="password" id="inputConfirmPassword" required />
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-primary" type="submit">Register</button>
                            <button className="btn btn-secondary" type="reset">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
