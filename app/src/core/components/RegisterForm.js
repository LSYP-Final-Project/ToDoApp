import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function RegisterForm() {
    // INFO: form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm password'),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

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
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                        <div className="row mb-3">
                            <div className="col">
                                {/* TODO: extract Input to class component */}
                                <label className="form-label" htmlFor="email">Email</label>
                                <input {...register("email", { required: true })} className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" type="text" id="email" />
                                {errors.email && <p className="invalid-feedback">{errors.email?.message}</p>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className={`form-control ${errors.password ? 'is-invalid' : ''}`} name="password" type="password" id="password" {...register("password", { required: true })} />
                                {errors.password && <p className="invalid-feedback">{errors.password?.message}</p>}
                            </div>
                            <div className="col">
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                <input className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} name="confirmPassword" type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
                                {errors.confirmPassword && <p className="invalid-feedback">{errors.confirmPassword?.message}</p>}
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex">
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
