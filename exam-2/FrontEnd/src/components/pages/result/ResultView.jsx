import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getResult } from '../../pages/service/ResultService';

const ResultView = () => {
  const [result, setResult] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResult = async () => {
      const data = await getResult(id);
      setResult(data);
    };
    fetchResult();
  }, [id]);

  if (!result) return <div>Loading...</div>;

  return (
    <div>
      <h1>Exam Result</h1>
      <p>Score: {result.score}</p>
      <p>Total Questions: {result.totalQuestions}</p>
      <p>Correct Answers: {result.correctAnswers}</p>
    </div>
  );
};

export default ResultView;
