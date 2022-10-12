import React from 'react';

const Option = ({ option, correctAnswer }) => {
    console.log(option);

    const quizHandleBtn = () => {

        console.log('clicked');
        if (correctAnswer === option){
            alert('Your answer is right!')
        }
        else{
            alert ('you are wrong')
        }
    }
    return (
        <div>
            <button onClick={() => quizHandleBtn(option)}>
                {/* <input type="radio" /> */}
                {option}
            </button>
        </div>
    );
};

export default Option;