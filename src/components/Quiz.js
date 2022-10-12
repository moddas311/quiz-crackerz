import React from 'react';
import Option from './Option';

const Quiz = ({ quiz }) => {
    const { options, id, question, correctAnswer } = quiz;

    return (
        <div>
            <div className='lg:m-12 bg-blue-200 p-5 rounded-md
            sm:overflow-hidden m-8 p-5 rounded-sm'>
                <p className='m-4'>{question}</p>
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