import React, { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Annotation,
} from 'react-simple-maps';
import './WorldMap.scss';
import GeoData from '../../assets/data/world-110m.json';
import DataSource from '../../assets/data/vulnerability.csv';

// const DATA_SOURCE =
//     '/media/hxtruong/Personal/Project/Freelancer/web/src/assets/data/vulnerability.csv';

// const geoUrl =
//     'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleLinear()
    .domain([0.29, 0.68])
    .range(['#ffedea', '#ff5233']);

const rounded = (num) => {
    if (num > 1000000000) {
        return `${Math.round(num / 100000000) / 10}Bn`;
    }
    if (num > 1000000) {
        return `${Math.round(num / 100000) / 10}M`;
    }
    return `${Math.round(num / 100) / 10}K`;
};

const WorldMap = ({ setTooltipContent }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        csv(DataSource).then((data) => {
            setData(data);
        });
    }, []);

    return (
        <ComposableMap
            data-tip=""
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 200,
            }}
            style={{ width: '100%', height: '100%' }}
        >
            {data.length > 0 && (
                <ZoomableGroup zoom={1.2}>
                    <Geographies geography={GeoData}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? colorScale(d['2017']) : '#F5F4F6'}
                                        onMouseEnter={() => {
                                            const { NAME, POP_EST } = geo.properties;
                                            setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent('');
                                        }}
                                        style={{
                                            // default: {
                                            //     fill: '#D6D6DA',
                                            //     outline: 'none',
                                            // },
                                            hover: {
                                                fill: '#71C9F3',
                                                outline: '#0096DF',
                                            },
                                            pressed: {
                                                fill: '#1AA0E1',
                                                outline: '#0096DF',
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            )}
        </ComposableMap>
    );
};

export default WorldMap;
