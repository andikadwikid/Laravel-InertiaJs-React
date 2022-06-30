import React from 'react';
import Dialog from '../../Components/Dialog';
import Pagination from '../../Components/Pagination';
import App from '../../Layouts/App';
import useDialog from '../../Hooks/useDialog';
import { Inertia } from '@inertiajs/inertia';
import FormUser from '../../Components/User/Form/FormUser';
import FormEditUser from '../../Components/User/Form/FormEditUser';
import { useForm } from '@inertiajs/inertia-react';

export default function Index(props) {

    const { data: users, links, from } = props.users

    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    });

    // const { modalAdd, open, close } = useDialog()
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog()
    const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog()
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog()

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });


    const openEditDialog = (user) => {
        console.log(user)
        setData(user)
        editDialogHandler()
    }

    const openDestroyDialog = (user) => {
        setData(user)
        destroyDialogHandler()
    }

    const destroyUser = () => {
        Inertia.delete(route('users.destroy', data.id),
            {
                onSuccess: () => {
                    destroyCloseTrigger()
                }
            })
    }

    const storeHandler = (e) => {
        e.preventDefault();
        //untuk input
        post(route('users.store'), {
            data,
            // untuk reset input
            onSuccess: () => { reset(), addCloseTrigger() },
        });
    }

    const updateHandler = (e) => {
        e.preventDefault();
        //untuk input
        put(route('users.update', data.id), {
            data,
            // untuk reset input
            onSuccess: () => { reset(), editCloseTrigger() },
        });
    }

    return (
        <div className="container">
            <Dialog trigger={addTrigger} title="Add Modal">
                <FormUser {...{
                    errors,
                    submitLabel: 'Create',
                    submit: storeHandler,
                    data,
                    onChange,
                }} />
                {/* <button onClick={close} className="btn btn-secondary">Cancel</button> */}
            </Dialog>

            <Dialog trigger={editTrigger} title={`Edit User : ${data.name}`}>
                <FormEditUser {...{
                    errors,
                    submitLabel: 'Update',
                    submit: updateHandler,
                    data,
                    onChange,
                }} />
            </Dialog>

            <Dialog trigger={destroyTrigger} title={`Delete User : ${data.name}`}>
                <p>Are you sure you want to delete this user ?</p>
                <button onClick={destroyUser} className="btn btn-danger">Delete</button>
            </Dialog>

            <button onClick={addDialogHandler} className="btn btn-primary px-4">
                Add
            </button>
            <div className="card mt-3">
                <div className="card-header">Users</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{from + index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>

                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button className="dropdown-item" onClick={() => openEditDialog(user)}>Edit</button></li>
                                                <li><button className="dropdown-item" onClick={() => openDestroyDialog(user)}>Delete</button></li>
                                            </ul>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination links={links} />

                </div>
            </div>
        </div>
    )
}

Index.layout = (page) => <App children={page} title="Users" />
