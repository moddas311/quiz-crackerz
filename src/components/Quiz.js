import React from 'react';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const { options, id, question, correctAnswer } = quiz;

    const notify = () => toast.success(`${correctAnswer}`,{position:'top-center'});
    const iconHandleBtn = () => {
        notify()
    }

    return (
        <div>
            <div className='lg:m-12 bg-blue-200 p-5 rounded-md
            sm:overflow-hidden m-8 p-5 rounded-sm'>
                <div className='flex justify-between'>
                    <div>
                        <p className='m-4'>{question}</p>
                    </div>
                    <div>
                        <button>
                            <EyeIcon onClick={iconHandleBtn} width={20} height={20}></EyeIcon>
                            <ToastContainer />
                        </button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {
                        options.map((option, index) => <Option
                            key={index + id}
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