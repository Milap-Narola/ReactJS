import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUserById } from "./redux/Userslice";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, Bounce, toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.users);


  const [userupdate, setUserupdate] = useState({

  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUserupdate({ ...userupdate, [name]: value })
  }

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) setUserupdate(user);
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await dispatch(updateUser({ id, updatedata: userupdate })).unwrap();

      toast.success('🦄 User Updated Successfully!', {
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

      toast.error('🦄 User Not Updated!', {
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
  };
  if (!userupdate) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control mb-2"
          value={userupdate.name || ''}
          onChange={handleInput} />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control mb-2"
          value={userupdate.email || ''}
          onChange={handleInput} />
        <input
          type="number"
          placeholder="Age"
          name="age"
          className="form-control mb-2"
          value={userupdate.age || ''}
          onChange={handleInput} />
        <button className="btn btn-warning" >Update
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateUser;
