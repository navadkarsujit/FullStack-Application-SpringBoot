import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:9898/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:9898/user/${id}`);
        loadUsers();
    };

    return (
        <div className='container'>
            <div className="py-4 ">

                <table className="table border shadow-sm ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1} ID={user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <th scope="col">
                                        <Link type="button" class="btn btn-success mx-2"
                                        to={`/viewuser/${user.id}`}
                                        
                                        >View</Link>
                                        
                                        
                                        <Link type="button" class="btn btn-secondary mx-2"
                                            to={`/edituser/${user.id}`}
                                        >Edit
                                        
                                        </Link>
                                        
                                        <button type="button" class="btn btn-danger mx-2"
                                            onClick={() => deleteUser(user.id)}


                                        >Delete</button>

                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
