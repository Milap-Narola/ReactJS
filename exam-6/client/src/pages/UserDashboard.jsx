
import React, { useState } from "react";
import API from "../config/Api";
import Cookies from "js-cookie";

const UserDashboard = () => {
  const [user, setUser] = useState({
    question: "",
  });
  const [questions, setQuestions] = useState([]);

  // Handle input change
  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Create a question
  const createQuestion = async (data) => {
    try {
      let res = await API.post("/questions/create", data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      setQuestions([...questions, res.data]);
      setUser({ question: "" });
    } catch (error) {
      console.error("Error creating question:", error);
    }
  };

  // Submit form
  const onSubmit = (e) => {
    e.preventDefault();
    createQuestion(user);
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-black ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full sm:w-96 text-center">
        <h2 className="text-3xl font-semibold text-center text-blue-600">User Dashboard</h2>
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="question"
            placeholder="Enter your question"
            value={user.question}
            onChange={handleInput}
            className="w-full px-4 py-2 border text-black font-bold rounded-md"
          />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
            Create Question
          </button>
        </form>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Your Questions:</h3>
          {questions.length > 0 ? (
            questions.map((q, index) => (
              <p key={index} className="border p-2">{q.question}</p>
            ))
          ) : (
            <p className="text-gray-600">No questions yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
