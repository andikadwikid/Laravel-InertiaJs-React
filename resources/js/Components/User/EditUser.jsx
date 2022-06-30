import { useForm, usePage } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';
import FormEditUser from './Form/FormEditUser';

const EditUser = ({ close, identifier }) => {

    // const { errors } = usePage().props
    const { data, setData, put, reset, errors } = useForm({
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
            <FormEditUser {...{ errors, data, setData: setData }} />
        </form>
    );
}

export default EditUser;
