import React, { useState, useEffect } from "react";
import API from "../config/Api";
import Cookies from "js-cookie";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({
    question: "",
  });
  const [questions, setQuestions] = useState([]);

  const handleInput = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get("/questions", {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        });
        setQuestions(res.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  const createQuestion = async () => {
    try {
      const res = await API.post(
        "/questions/create",
        { question: admin.question },
        {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      setQuestions([...questions, res.data]);
      setAdmin({ question: "" }); 
    } catch (error) {
      console.error("Error creating question:", error);
    }
  };


  const onSubmit = (e) => {
    e.preventDefault();
    createQuestion();
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Admin Dashboard</h2>
        
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="question"
            placeholder="Enter a new question"
            value={admin.question}
            onChange={handleInput}
            className="w-full px-4 py-2 border text-black font-bold rounded-md"
          />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
            Create Question
          </button>
        </form>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">All Questions:</h3>
          {questions.length > 0 ? (
            questions.map((q, index) => (
              <p key={index} className="border font-bold p-2">{q.question}</p>
            ))
          ) : (
            <p className="text-gray-500">No questions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;