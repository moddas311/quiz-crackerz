import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const chartData = useLoaderData();
    const data = chartData.data;

    return (
        <div className='py-10 sm:overflow-hidden'>
            <h1 className='text-4xl text-center text-orange-600'>This is My Awesome LineChart</h1>
            <div className='flex justify-center mt-10'>
                <ResponsiveContainer height={400} width="80%">
                    <LineChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="total"
                            string="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;