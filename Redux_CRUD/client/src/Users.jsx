// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { getUser, deleteUser } from './redux/Userslice';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {

    const { users, status, error } = useSelector((store) => store.users)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const updateHandle = (user) => {
        console.log(user);
        
        try {
            navigate(`/update/${user._id}`).unwrap()
            alert("User Updated Successful")
        } catch (error) {
            alert(error.message || "Failed to update user");
        }
        const deletHandle = (user) => {
            try {
                if (window.confirm("Are you sure you want to delete this user?")) {
                    dispatch(deleteUser(user._id)).unwrap()
                    alert("User Deleted Successful")
                }
            } catch (error) {
                alert(error.message || "Failed to delete user");
            }
        }
        return (
            <div className='bg-light text-center mt-4 p-4 d-flex justify-content-center'>

                <div className='w-100'>
                    <button className='btn btn-success btn-sm ' onClick={() => navigate('/create')}>
                        Add +
                    </button>
                    {status === "loading" && <p>Loading users...</p>}
                    {error && <p className="text-danger">Error: {error}</p>}
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <button className='btn btn-sm btn-success me-2'
                                                onClick={() => {
                                                    updateHandle(user)
                                                }}>
                                                Update
                                            </button>
                                            <button className='btn btn-sm btn-danger'
                                                onClick={() => {
                                                    deletHandle(user)
                                                }}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No users found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Users