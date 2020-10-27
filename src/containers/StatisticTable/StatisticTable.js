/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/react-in-jsx-scope */
import { Table, Space, Row, Col, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import { Component } from 'react';

const data = [
    {
        key: '1',
        country: 'USA',
        cases: 43243,
        deaths: 324,
        newCases: 3340,
        newDeaths: 4,
        recovered: 10,
    },
    {
        key: '2',
        country: 'VV',
        cases: 32345,
        deaths: 324,
        newCases: 30,
        newDeaths: 4,
        recovered: 10,
    },
    {
        key: '3',
        country: 'RE',
        cases: 7456,
        deaths: 34,
        newCases: 453,
        newDeaths: 345,
        recovered: 5310,
    },
    {
        key: '4',
        country: 'TA',
        cases: 345,
        deaths: 34,
        newCases: 35,
        newDeaths: 453,
        recovered: 10345,
    },
    {
        key: '5',
        country: 'RR',
        cases: 7443256,
        deaths: 334,
        newCases: 4523,
        newDeaths: 3245,
        recovered: 53210,
    },
    {
        key: '6',
        country: 'EE',
        cases: 3435,
        deaths: 324,
        newCases: 352,
        newDeaths: 4553,
        recovered: 103345,
    },
    {
        key: '7',
        country: 'USA',
        cases: 43243,
        deaths: 324,
        newCases: 3340,
        newDeaths: 4,
        recovered: 10,
    },
    {
        key: '8',
        country: 'VV',
        cases: 32345,
        deaths: 324,
        newCases: 30,
        newDeaths: 4,
        recovered: 10,
    },
    {
        key: '9',
        country: 'RE',
        cases: 7456,
        deaths: 34,
        newCases: 453,
        newDeaths: 345,
        recovered: 5310,
    },
    {
        key: '10',
        country: 'TA',
        cases: 345,
        deaths: 34,
        newCases: 35,
        newDeaths: 453,
        recovered: 10345,
    },
    {
        key: '11',
        country: 'RR',
        cases: 7443256,
        deaths: 334,
        newCases: 4523,
        newDeaths: 3245,
        recovered: 53210,
    },
    {
        key: '12',
        country: 'EE',
        cases: 3435,
        deaths: 324,
        newCases: 352,
        newDeaths: 4553,
        recovered: 103345,
    },
];

class StatisticTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchedColumn: '',
        };
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node) => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => this.handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: 'Contry',
                dataIndex: 'country',
                sorter: (a, b) => a.country.length - b.country.length,
                sortDirections: ['descend', 'ascend'],
                width: 170,
                ...this.getColumnSearchProps('country'),
            },
            {
                title: 'Cases',
                dataIndex: 'cases',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.cases - b.cases,
                sortDirections: ['descend', 'ascend'],
                width: 170,
            },
            {
                title: 'Deaths',
                dataIndex: 'deaths',
                sorter: (a, b) => a.deaths - b.deaths,
                sortDirections: ['descend', 'ascend'],
                width: 170,
            },
            {
                title: 'New Cases',
                dataIndex: 'newCases',
                sorter: (a, b) => a.newCases - b.newCases,
                sortDirections: ['descend', 'ascend'],
                width: 170,
            },
            {
                title: 'New Deaths',
                dataIndex: 'newDeaths',
                sorter: (a, b) => a.newDeaths - b.newDeaths,
                sortDirections: ['descend', 'ascend'],
                width: 170,
            },
            {
                title: 'Recovered',
                dataIndex: 'recovered',
                sorter: (a, b) => a.recovered - b.recovered,
                sortDirections: ['descend', 'ascend'],
                width: 170,
            },
        ];

        return (
            <div style={{ width: '100%' }}>
                <h2 style={{ color: '#9D1027' }}>Worldwide COVID-19 Statistics:</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Table columns={columns} dataSource={data} onChange={this.onChange} bordered />
                </div>
            </div>
        );
    }
}

export default StatisticTable;
