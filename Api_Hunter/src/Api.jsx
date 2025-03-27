import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Api = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiTest = async () => {
    if (!apiUrl) return toast.error("Please enter an API URL!");

    setLoading(true);
    try {
      const res = await axios.get(apiUrl);
      setResponse(res.data);
      toast.success("API Fetched Successfully!");
    } catch (error) {
      toast.error("Error fetching API");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-screen ">
      <ToastContainer />

      <h2 className="flex justify-center" >🔥 API Hunter</h2>
      <div className="flex justify-center">
        <input
        className="border-2 border-gray-300 text-sm w-lg"
          type="text"
          placeholder="Enter API URL (e.g. https://jsonplaceholder.typicode.com/posts)"
          onChange={(e) => setApiUrl(e.target.value)}
        />
        <button  className="w-30 h-10 " onClick={handleApiTest} disabled={loading}>
          {loading ? "Loading..." : "Test API"}
        </button>
      </div>

      <div className="">
        {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default Api;
