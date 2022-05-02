import React from 'react';
import Speedometer from "react-d3-speedometer";

const legend = [
    {
        name: 'Good',
        color: '#a6deff'
    },
    {
        name: 'Average',
        color: '#76c3f1'
    },
    {
        name: 'Bad',
        color: '#5faad7'
    },
    {
        name: 'Very Bad',
        color: '#0077bf'
    },
];

export default function Odometer({ value = 0 }) {
    return (
        <>
            <div style={{ display: 'flex', fontSize: 14 }}>
                <div>
                    <Speedometer
                        minValue={0}
                        maxValue={100}
                        needleHeightRatio={0.8}
                        ringWidth={20}
                        segments={4}
                        value={value}
                        segmentColors={legend.map(({ color }) => color)}
                        needleColor="#000080"
                    />
                </div>
                <div style={{ marginLeft: 20 }}>
                    Legend
                    <ul style={{ paddingLeft: 20 }}>
                        {legend.map(({ name, color }) =>
                            <li key={name} style={{ color: color }}>{name}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
