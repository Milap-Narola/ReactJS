import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './config/Firebase';

const User = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    // Create User
    const createUser = async (data) => {
        try {
            const userCollection = collection(db, "users");
            let userData = await addDoc(userCollection, data);
            console.log(userData);

            getData(); // Refresh user list
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    // Fetch Users
    const getData = async () => {
        try {
            const userCollection = collection(db, "users");
            const data = await getDocs(userCollection);
            let userList = [];
            data.docs.map(doc => {
                let id = doc.id;
                let data = doc.data();
                userList.push({ id, ...data });
            })
            // console.log(userList);
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // make api call to create user
        let user = {
            email: email,
            password: password,
            createdAt: Date.now()
        }
        createUser(user)
    }



    // Delete User
    const deleteUser = async (id) => {
        try {
            let docref = doc(db, "users", id);
            let data = await deleteDoc(docref);
            console.log(data);

            getData();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Update User
    const updateUser = async (id, newEmail) => {
        try {
            let docref = doc(db, "users", id);
            let data = await updateDoc(docref, { email: newEmail });
            console.log(data);

            getData();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col w-screen mx-auto bg-gray-700 min-h-screen rounded-lg p-6">
            <form onSubmit={handleSubmit} className="flex flex-col font-bold w-96 space-y-3 mb-6">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="bg-blue-500  text-white p-2 rounded hover:bg-blue-600">
                    Create User
                </button>
            </form>

            <hr className="my-4" />

            <h3 className="text-xl font-semibold mb-3">Users Details</h3>
            {users.map(user => (
                <div key={user.id} className="border p-4 mb-2 rounded shadow">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Password:</strong> {user.password}</p>
                    <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>

                    <div className="mt-2 flex space-x-2">
                        <button
                            onClick={() => updateUser(user.id, prompt("Enter new email:", user.email))}
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => deleteUser(user.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;
