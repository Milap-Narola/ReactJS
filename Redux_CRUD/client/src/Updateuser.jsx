import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUserById } from "./redux/Userslice";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((store) => store.users);
  console.log(users);

  const [updatedUser, setUpdatedUser] = useState(null);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value })
  }

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUpdatedUser(users)
    
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(updatedUser));
    navigate("/");
  };
  if (!updatedUser) {
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
          value={updatedUser.name || ''}
          onChange={handleInput} />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control mb-2"
          value={updatedUser.email || ''}
          onChange={handleInput} />
        <input
          type="number"
          placeholder="Age"
          name="age"
          className="form-control mb-2"
          value={updatedUser.age || ''}
          onChange={handleInput} />
        <button type="submit" className="btn btn-warning">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
