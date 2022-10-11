import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicQuiz = () => {

    const quizData = useLoaderData();
    console.log(quizData);
    return (
        <div>
            <h1>this is topic</h1>
        </div>
    );
};

export default TopicQuiz;