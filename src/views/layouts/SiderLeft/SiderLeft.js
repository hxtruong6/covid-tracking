import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Image } from 'antd';
import {
    AreaChartOutlined,
    DesktopOutlined,
    TableOutlined,
    GlobalOutlined,
} from '@ant-design/icons';

import CovidImage from '../../../assets/images/logocovid.png';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderLeft extends React.Component {
    constructor(props) {
        super(props);
        console.log('props:', props);
        this.state = {
            collapsed: false,
            siderSelected: localStorage.getItem('sider') || 'dashboard',
        };
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    onSelectSider = (value) => {
        localStorage.setItem('sider', value.key);
        const { history } = this.props;
        history.push(`/${value.key}`);
    };

    render() {
        const { collapsed, siderSelected } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Image
                    preview={false}
                    width={collapsed ? 50 : 150}
                    style={{ padding: 5 }}
                    src={CovidImage}
                />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={siderSelected}
                    value={siderSelected}
                    mode="inline"
                    onSelect={this.onSelectSider}
                >
                    <Menu.Item key="dashboard">
                        <DesktopOutlined />
                        <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key="map">
                        <GlobalOutlined />
                        <span>Map</span>
                    </Menu.Item>
                    <Menu.Item key="chart">
                        <AreaChartOutlined />
                        <span>Chart</span>
                    </Menu.Item>
                    <Menu.Item key="table">
                        <TableOutlined />
                        <span>Table</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(SiderLeft);
