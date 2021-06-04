import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { addUser, fetchUsers } from 'Redux/actions'
import { getUsers } from 'Redux/selectors'
import UsersServices from 'Services/UsersService'

function RegisterForm() {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    // INFO: form validation rules 
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid')
            .test('test-uniqueEmail', '', function (value, context) {
                if (users.find(user => user.email === value)) {
                    return this.createError({ message: 'User with that email already exist' });
                } else {
                    return true;
                }
            }),
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
        const fullData = {
            ...data,
            id: Math.floor(new Date().getTime() * Math.random()),
            username: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                }
            },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        }

        dispatch(addUser(fullData))
        // NOTE: adding to data.json:
        UsersServices.postUser(fullData)

        Swal.fire(
            'Success',
            'Your account is created',
            'success'
        )
            .then(() => { history.push("/") })
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="card">
                <h5 className="card-header">Create account</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input {...register("name", { required: true })} className={`form-control ${errors.name ? 'is-invalid' : ''}`} name="name" type="text" id="name" />
                                {errors.name && <p className="invalid-feedback">{errors.name?.message}</p>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
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
