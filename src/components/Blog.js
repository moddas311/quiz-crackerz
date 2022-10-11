import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                        <span className='relative inline-block sm:text-center'>
                            <svg
                                viewBox='0 0 52 24'
                                fill='currentColor'
                                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                            >
                                <defs>
                                    <pattern
                                        id='70326c9b-4a0f-429b-9c76-792941e326d5'
                                        x='0'
                                        y='0'
                                        width='.135'
                                        height='.30'
                                    >
                                        <circle cx='1' cy='1' r='.7' />
                                    </pattern>
                                </defs>
                                <rect
                                    fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                                    width='52'
                                    height='24'
                                />
                            </svg>
                            <span className='relative'>Hey!</span>
                        </span>{' '}
                        Welcome to My Blog.
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                        Today I'm going discuss about some quiz related question if you're interested or thinking about it you should spend 5-10 minutes here.
                    </p>
                </div>
            </div>
            <div className='max-w-screen-xl sm:mx-auto'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-1 text-center lg:mx-40'>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                What is the purpose of <span className='text-orange-500'>React Router</span> ?
                            </p>
                            <p className='text-gray-700'>
                                Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                How does <span className='text-orange-500'>Context API</span> works?
                            </p>
                            <p className='text-gray-700'>
                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                <br />
                                <br />
                                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                Telling about <span className='text-orange-500'>useRef</span> hook.
                            </p>
                            <p className='text-gray-700'>
                                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                                <br />
                                <br />
                                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

                                To avoid this, we can use the useRef Hook.
                                <br />
                                <br />
                                In general, we want to let React handle all DOM manipulation.

                                But there are some instances where useRef can be used without causing issues.

                                In React, we can add a ref attribute to an element to access it directly in the DOM.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-8'>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;