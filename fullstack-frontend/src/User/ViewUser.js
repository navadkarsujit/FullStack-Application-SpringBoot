import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9892/user/${id}`)
        setUser(result.data)
    };


    return (

        <div className="container w-50">
            <div className="row mt-4 ">
                <div className=" border pb-4 rounded shadow-light " >

                    <div class="container mt-3">
                        <h2>View User</h2>
                        <div class="card">

                            <table class="table">
                               
                                <tbody>
                                    <tr>
                                        <th scope="row"><div class="card-header "><h4>Id</h4></div></th>
                                        <td><div class="card-header "><h4>{user.id}</h4></div></td>
                                    </tr>

                                    <tr>
                                        <th scope="row"><div class="card-header "><h4>Name</h4></div></th>
                                        <td><div class="card-header "><h4>{user.name}</h4></div></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><div class="card-header "><h4>Unsername</h4></div></th>
                                        <td><div class="card-header "><h4>{user.username}</h4></div></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><div class="card-header "><h4>Email</h4></div></th>
                                        <td><div class="card-header "><h4>{user.email}</h4></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link className="btn btn-primary my-2" to={"/"}>Back to home</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}
