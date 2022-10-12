import React from 'react';
import Option from './Option';

const Quiz = ({ quiz }) => {
    console.log(quiz)
    const { options, id, question, correctAnswer } = quiz;
    return (

        <div>
            <div className='m-24 bg-blue-200 p-5 rounded-md'>
                <h1 className='m-4'>{question}</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {
                        options.map(option => <Option
                            key={option.index}
                            option={option}
                            correctAnswer={correctAnswer}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;