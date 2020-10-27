/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Layout, Card, Descriptions, Spin, Button, Col, Row } from 'antd';
import Api from '../../../api';
import './Dashboard.scss';

import PRODUCTS from '../../../Utils/Product';

const { Content } = Layout;
const { Meta } = Card;

const MIN_WEIGHT = 1;

class Dashboard extends Component {
    ws = new WebSocket('ws://localhost:8080/dev/ttyUSB0');

    _isMounted = false;

    constructor(props) {
        super(props);
        const defaultTypeItem = Object.keys(PRODUCTS)[0];
        this.state = {
            selectedItem: {
                typeKey: defaultTypeItem,
                typeName: PRODUCTS[defaultTypeItem].title,
                itemKey: Object.keys(PRODUCTS[defaultTypeItem].items)[0],
                ...PRODUCTS[defaultTypeItem].items[Object.keys(PRODUCTS[defaultTypeItem].items)[0]],
            },
            isMeasured: false,
            autoId: 0,
            weight: 0,
            measureTimeStart: 0,
            measureTime: 0,
            createdAt: null,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.ws.onopen = () => {
                // on connecting, do nothing but log it to the console
                console.log('connected');
            };
            this.ws.onmessage = (evt) => {
                // listen to data sent from the websocket server
                console.log('Message server: ', evt.data);
                let weight = '';

                if (!isNaN(evt.data)) {
                    weight = Number(evt.data) > MIN_WEIGHT ? Number(evt.data) : '';
                } else {
                    this.setState({ measureTimeStart: new Date().getTime() });
                }

                let isMeasured = false;
                let newItem = {};
                const { measureTimeStart, selectedItem } = this.state;

                if (Number(weight) && weight > MIN_WEIGHT) {
                    newItem = {
                        id: Api.getGlobalId() + 1,
                        weight,
                        measureTime: new Date().getTime() - measureTimeStart,
                        createdAt: new Date().toLocaleString(),
                        type: selectedItem.typeName,
                        name: selectedItem.name,
                    };
                    console.log('xxx 432 ', newItem);
                    Api.putItem(newItem);

                    isMeasured = true;
                }

                this.setState({
                    weight,
                    isMeasured,
                    autoId: newItem.id,
                    measureTime: newItem.measureTime,
                    createdAt: newItem.createdAt,
                });
            };

            this.ws.onclose = () => {
                console.log('disconnected');
                // automatically try to reconnect on connection loss
            };
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    nextItemOnClick = () => {
        const { isMeasured: preMeasure } = this.state;
        this.setState({ isMeasured: !preMeasure });
    };

    onItemSelect = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { isMeasured, autoId, weight, measureTime, selectedItem, createdAt } = this.state;
        return (
            <Content style={{ margin: '0 16px' }} className="dashboard">
                <Row
                    className="dashboard__row "
                    style={{
                        height: '100%',
                        display: 'flex',
                    }}
                >
                    <Col
                        span={16}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexFlow: 'column nowrap',
                        }}
                        className="dashboard__left"
                    >
                        <div>abd</div>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            justifyContent: 'center',
                        }}
                    >
                        <div>123</div>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Dashboard;
