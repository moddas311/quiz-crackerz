import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicQuiz = () => {
    const quizData = useLoaderData();
    const { total, name, id, questions } = quizData.data;

    return (
        <div className='py-10'>
            <h2 className='text-3xl text-center text-orange-600'>Quiz of: {name}</h2>
            <h4 className='text-center text-sky-600'>Total Quiz: {total}</h4>
            <div>
                {
                    questions.map(quiz => <Quiz
                        key={quiz.index}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default TopicQuiz;