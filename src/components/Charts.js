import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const chartData = useLoaderData();
    const data = chartData.data;
    // console.log(data);

    return (
        <div className='mt-10 flex justify-between'>
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
                <Line type="monotone" dataKey="total" stroke="#82ca9d"/>
            </LineChart>
        </div>
    );
};

export default Charts;