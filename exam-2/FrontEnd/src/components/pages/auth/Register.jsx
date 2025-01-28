import React, { useState, useContext } from 'react';
import { AuthContext } from '../../pages/context/AuthContext';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button type="submit">Register</Button>
    </form>
  );
};


