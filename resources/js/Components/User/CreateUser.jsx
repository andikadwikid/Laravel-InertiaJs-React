import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import FormUser from './Form/FormUser';

const CreateUser = ({ close }) => {

    const { errors } = usePage().props
    const { data, setData, post, reset } = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        //untuk input
        post(route('users.store'), {
            data,
            // untuk reset input
            onSuccess: () => { reset(), close() },
        });
    }

    return (
        <form onSubmit={onSubmit} noValidate>
            <FormUser {...{ errors, data, setData: setData, submit: 'Save' }} />

        </form>
    );
}

export default CreateUser;
