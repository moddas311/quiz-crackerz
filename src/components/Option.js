import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {

    const notify = () => toast.success("Wow so easy!", { position: "top-center" });

    const warn = () => toast.error("Your Answer was wrong", { position: "top-center" });

    const quizHandleBtn = () => {
        console.log('clicked');
        if (correctAnswer === option) {
            notify()
        }
        else {
            warn()
        }
    }
    return (
        <div className='p-2 bg-white text-blue-500 rounded-md'>
            <input
                onClick={() => quizHandleBtn(option)} type="radio"
                name="id"
            />
            {option}
            <ToastContainer />
        </div>
    );
};

export default Option;