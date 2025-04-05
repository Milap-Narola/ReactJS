import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import { Route, Routes } from 'react-router-dom';
import Createuser from './Createuser';
import UpdateUser from './Updateuser';
const App = () => {
  return (
    <>    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<Createuser />} />
      <Route path="/update/:id" element={<UpdateUser />} />
    </Routes>
    </>

  )
}

export default App