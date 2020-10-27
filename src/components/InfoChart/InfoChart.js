/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Bar,
    BarChart,
} from 'recharts';
import { Card, Image, Col, Row, Select } from 'antd';

import covidImage from '../../assets/Corona-card.gif';

const { Option } = Select;

const InfoChart = () => {
    return (
        <div style={{ width: '100%' }}>
            <h2 style={{ color: '#9D1027' }}>Select Country to View Graphs Accordingly:</h2>
            <Select style={{ width: 500 }} defaultValue="Option1">
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
            </Select>
            <Row justify="center">
                <CovidLineChart />
            </Row>
            <Row justify="space-around" align="middle">
                <Col span={12}>
                    <CovidPieChart />
                </Col>
                <Col span={12}>
                    <CovidBarChart />
                </Col>
            </Row>
        </div>
    );
};

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

class CovidLineChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        return (
            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 10,
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
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];

class CovidPieChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    render() {
        return (
            <PieChart width={450} height={450}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx={225}
                    cy={225}
                    outerRadius={90}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        );
    }
}

class CovidBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <BarChart
                width={550}
                height={350}
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
                <Bar dataKey="pv" fill="#8884d8" />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        );
    }
}

export default InfoChart;
