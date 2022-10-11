import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicQuiz = () => {

    const quizData = useLoaderData();
    const data = quizData.data.questions.options;
    console.log(data);
    return (
        <div>
            <p></p>
            <div className= 'mt-10 grid grid-cols-2 gap-5'>
            <input type="radio" name='option' />
            <input type="radio" name='option' />
            <input type="radio" name='option' />
            <input type="radio" name='option' />   
        </div>
        </div>
    );
};

export default TopicQuiz;