import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicQuiz = () => {
    const quizData = useLoaderData();
    // const data =
    console.log(quizData.data);
    const { total, id, name, questions } = quizData.data;
    return (
        <div>
            <h2>Quiz of: {name}</h2>
            <h4>Total Quiz: {total}</h4>
            <div>
                {
                    questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default TopicQuiz;