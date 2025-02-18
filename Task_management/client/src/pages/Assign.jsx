import React, { useEffect, useState } from 'react'
import {API}  from '../config/api';



const Assign = () => {
  const [task, setTask] = useState({
    title: '',
    desc: '',
    endDate: '',
    assignTo: '',
  })
  const [users, setUsers] = useState([])
  const getUser = async () => {
    let res = await API.get(`/users?role=user`)
    setUsers(res.data);
  };
  useEffect(() => {
    getUser()
  }, [])
  const handleInput = (e) => {
    const { name, value } = e.target
    setTask({ ...task, [name]: value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(task)
  }
  return (
    <div>
      <form onSubmit={onSubmit} className=''>

        <input type="text"
          name='title'
          placeholder='Title'
          value={task.title}
          onChange={handleInput}  
          className=''/>

        <input type="text"
          name='desc'
          placeholder='Description'
          value={task.desc}
          onChange={handleInput} 
          className=''/>

        <input type="text"
          name='endDate'
          placeholder='End Date'
          value={task.endDate}
          onChange={handleInput}
          className='' />

        <select name='assignTo' onChange={handleInput} className=''>
          <option value="">Select</option>
          {users.map((user) => {
            <option value={user._id} key={user._id}>
              {user.name}
            </option>
          })}
        </select>
        <input type="submit" value={Assign} className=''/>
      </form>
    </div>
  )
}

export default Assign