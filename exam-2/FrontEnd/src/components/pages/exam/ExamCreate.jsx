import React, { useState } from 'react';
import { createExam } from '../service/ExamService';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

const ExamCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createExam({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Exam Title"
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Exam Description"
      />
      <Button type="submit">Create Exam</Button>
    </form>
  );
};

export default ExamCreate;
