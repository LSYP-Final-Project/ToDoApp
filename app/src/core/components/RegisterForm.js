import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function RegisterForm() {
    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm({
        formOptions
    });
    const { errors } = formState;

    const onSubmit = (data, e) => {
        // e.target.reset(); // reset after form submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data));
        // TODO: change path to login
        // axios({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:5000/signup',
        //     data: data
        // })
        // setLoggedUser(true)
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err))
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="card m-3 w-75">
                <h5 className="card-header">Create account</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input {...register("email", { required: true })} className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" type="text" id="email" />
                                {errors.email && <p className="invalid-feedback">This is required</p>}
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-control" name="password" type="password" id="password" {...register("password", { required: true })} />
                            </div>
                            <div className="col">
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                <input className="form-control" name="confirmPassword" type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-primary" type="submit">Register</button>
                            <button className="btn btn-secondary" type="button" onClick={() => reset()}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
