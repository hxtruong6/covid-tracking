import React from 'react';
import { Card, Image, Col, Row } from 'antd';
import covidImage from '../../assets/Corona-card.gif';

const InfoArea = () => {
    return (
        <div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    // flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexFlow: 'row wrap',
                    margin: 'auto',
                }}
            >
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
            </div>
            <Row justify="space-around">
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
                <InfoCard title="abc" content="123" sideColor="red" titleColor="blue" />
            </Row>
        </div>
    );
};

const InfoCard = ({ title, titleColor, content, sideColor }) => {
    return (
        <div>
            {/* <div style={{ color: sideColor, position: 'absolute', width: 4 }} /> */}
            <div
                style={{
                    margin: 5,
                    backgroundColor: 'white',
                    padding: 15,
                    borderRadius: 3,
                    minWidth: 250,
                    minHeight: 120,
                }}
            >
                <div
                    style={{
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >
                    <div>
                        <h3 style={{ color: titleColor }}>{title}</h3>
                        <p>{content}</p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 'auto',
                            marginBottom: 'auto',
                        }}
                    >
                        <Image
                            style={{ marginLeft: 'auto' }}
                            width="50%"
                            src={covidImage}
                            preview={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoArea;
