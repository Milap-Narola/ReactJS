import React, { useEffect, useState } from 'react';
import { getExams } from '../../pages/service/ExamService';

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const data = await getExams();
      setExams(data);
    };
    fetchExams();
  }, []);

  return (
    <div>
      <h1>Exam List</h1>
      {exams.map((exam) => (
        <div key={exam.id}>{exam.title}</div>
      ))}
    </div>
  );
};

export default ExamList;
