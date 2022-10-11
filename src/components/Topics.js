import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import Topic from './Topic';

const Topics = () => {
    const quizData = useLoaderData();
    const topics = quizData.data;
    // console.log(topics);
    return (
        <div>
            <div >
                <HeaderTop></HeaderTop>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
                  {
                    topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                  }
                </div>
            </div>
        </div>
    );
};

export default Topics;