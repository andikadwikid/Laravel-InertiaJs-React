import React, { useState } from 'react';
import CreateUser from '../../Components/User/CreateUser';
import EditUser from '../../Components/User/EditUser';
import Dialog from '../../Components/Dialog';
import Pagination from '../../Components/Pagination';
import App from '../../Layouts/App';
import useDialog from '../../Hooks/useDialog';

export default function Index(props) {

    const { data: users, links, from } = props.users
    const [state, setState] = useState([])

    // const { modalAdd, open, close } = useDialog()
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog()
    const [editDialogHandler, editCloseTrigger, editTrigger] = useDialog()

    const openEditDialog = (user) => {
        console.log(user)
        setState(user)
        editDialogHandler()
    }

    return (
        <div className="container">
            <Dialog trigger={addTrigger} title="Add Modal">
                <CreateUser close={addCloseTrigger} />
                {/* <button onClick={close} className="btn btn-secondary">Cancel</button> */}
            </Dialog>

            <Dialog trigger={editTrigger} title={`Edit User : ${state.name}`}>
                <EditUser identifier={state} close={editCloseTrigger} />
                {/* <button onClick={close} className="btn btn-secondary">Cancel</button> */}
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
                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
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
