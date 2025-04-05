// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { getUser, deleteUser } from './redux/Userslice';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer, Bounce } from 'react-toastify';

const Users = () => {

    const { users, status, error } = useSelector((store) => store.users)
    // console.log(...users);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const updateHandle = (user) => {
        navigate(`/update/${user._id}`)
    }
    const deletHandle = (user) => {
        try {
            dispatch(deleteUser(user._id)).unwrap()
            dispatch(getUser())

            toast.success('🦄 User Deleted Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setTimeout(() => {
                navigate("/");
            }, 2000);

        } catch (error) {
            toast.error('🦄 User Not Deleted!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
    return (
        <div className=' bg-light text-center mt-4 p-4 d-flex justify-content-center'>

            <div className='w-100'>
                <marquee behavior="scroll"  className='bg-danger'>
                    <h2 className='fw-bold text-light'>CREATE_READ_UPDATE_DELETE😎</h2>
                </marquee>
                <div className=' d-flex w-100 border-black text-center justify-content-center  bg-dark bg-shadow rounded'>
                    <button className='btn btn-success btn-sm w- ' onClick={() => navigate('/create')}>
                        Add
                    </button></div>
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
                            <tr key="no-users">
                                <td colSpan="4" className="text-center">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <ToastContainer />
            </div>
        </div>
    )
}


export default Users