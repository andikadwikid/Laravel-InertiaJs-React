import { useForm, usePage } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';

const EditUser = ({ close, identifier }) => {

    const { errors } = usePage().props
    const { data, setData, put, reset } = useForm({
        name: identifier.name,
        email: identifier.email,
        username: identifier.username,
        location: identifier.location,
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        //untuk input
        put(route('users.update', identifier.id), {
            data,
            // untuk reset input
            onSuccess: () => { reset(), close() },
        });
    }

    useEffect(() => {
        setData({
            ...data,
            name: identifier.name,
            email: identifier.email,
            username: identifier.username,
            location: identifier.location,
        })
    }, [identifier])

    return (
        <form onSubmit={onSubmit} noValidate>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" value={data.name} onChange={onChange} id="name" className="form-control" />
                        {errors && (<div className="text-danger mt-1">{errors.name}</div>)}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" value={data.email} onChange={onChange} id="email" className="form-control" />
                        {errors && (<div className="text-danger mt-1">{errors.email}</div>)}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" value={data.username} onChange={onChange} id="username" className="form-control" />
                        {errors && (<div className="text-danger mt-1">{errors.username}</div>)}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" name="location" value={data.location} onChange={onChange} id="location" className="form-control" />
                        {errors && (<div className="text-danger mt-1">{errors.location}</div>)}
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Update</button>

        </form>
    );
}

export default EditUser;
