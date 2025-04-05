import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createUser } from './redux/Userslice';

const Createuser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    })
    const handleInput = (e) => {
        let { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user.name || !user.email || !user.age) {
            alert("All fields are required!");
            return;
        }
        try {

            let res = await dispatch(createUser(user)).unwrap()
            alert(res.message)
            navigate('/')
        } catch (error) {
            alert(error.message || "Failed to create user");
        }
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' >
            <div className='w-50 bg-white rounded p-3'>
                <h2>Create User</h2>
                <form onSubmit={handleSubmit} className=''>
                    <input className='form-control mb-2'
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={user.name}
                        onChange={handleInput} />
                    <input className='form-control mb-2
                ' type="email"
                        placeholder='Email'
                        name='email'
                        value={user.email}
                        onChange={handleInput} />
                    <input className='form-control mb-2'
                        type="number"
                        placeholder='Age'
                        name='age'
                        value={user.age}
                        onChange={handleInput} />
                    <button className='btn btn-success btn-md' type='submit'>Add User</button>
                </form>
            </div>
        </div>
    )
}

export default Createuser