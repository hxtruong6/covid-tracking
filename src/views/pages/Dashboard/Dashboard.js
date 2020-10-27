/* eslint-disable no-underscore-dangle */
import React, { Component, useState } from 'react';
import { Layout, Divider, Col, Row } from 'antd';
import ReactTooltip from 'react-tooltip';

import './Dashboard.scss';

import WorldMap from '../../../containers/WorldMap';
import InfoArea from '../../../components/InfoArea';
import InfoChart from '../../../components/InfoChart';
import StatisticTable from '../../../containers/StatisticTable';

const { Content } = Layout;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        };
    }

    setContent = (content) => {
        this.setState({ content });
    };

    render() {
        const { content } = this.state;
        return (
            <Content style={{ margin: '0 16px' }} className="dashboard">
                <Row style={{ height: '20%' }}>
                    <WorldMap setTooltipContent={this.setContent} />
                    <ReactTooltip>{content}</ReactTooltip>
                </Row>
                <Divider />
                <Row>
                    <Col span={24}>
                        <InfoArea />
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <InfoChart />
                </Row>
                <Divider />
                <Row>
                    <StatisticTable />
                </Row>
            </Content>
        );
    }
}

export default Dashboard;
