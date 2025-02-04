import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExam, submitExam } from '../../pages/service/ExamService';
import { Button } from '../../common/Button';

const ExamTake = () => {
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExam = async () => {
      const data = await getExam(id);
      setExam(data);
    };
    fetchExam();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitExam(id, answers);
  };

  if (!exam) return <div>Loading...</div>;

  return (
    <div>
      <h1>{exam.title}</h1>
      <form onSubmit={handleSubmit}>
        {exam.questions.map((question) => (
          <div key={question.id}>
            <p>{question.text}</p>
            {question.options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <Button type="submit">Submit Exam</Button>
      </form>
    </div>
  );
};

export default ExamTake;
