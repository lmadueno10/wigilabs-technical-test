import React, { useState, useEffect } from 'react';

import Odometer from '../components/Odometer/Odometer';

import {
  MINUTE_MS,
  MIN_NUMBER,
  MAX_NUMBER,
  COLORS,
  container,
  panel,
  panelHeading,
  panelBody,
  textField
} from '../const/const';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default function HomeNerdlet(props) {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(0);

  const handleChange = (e) => {
    const { target: { value } } = e;

    if (value > MAX_NUMBER)
      e.target.value = MAX_NUMBER;
  };

  const handleKeyPress = (e) => {
    const { key, target: { value } } = e;
    if (key === 'Enter')
      setValue(parseInt(value))
  };

  useEffect(() => {
    const interval = setInterval(() => {

      setColor((prevCounter) => prevCounter === COLORS.length - 1 ? 0 : prevCounter + 1);
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <div className="App" style={container}>
        <div style={panel}>
          <div style={{ ...panelHeading, background: COLORS[color] }}></div>
          <div style={panelBody}>
            <input
              type="number"
              style={textField}
              placeholder={'Message to Update'}
              min={MIN_NUMBER}
              max={MAX_NUMBER}
              onChange={handleChange}
              onKeyPress={handleKeyPress} />
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <Odometer value={value} />
        </div>
      </div>
    </>
  );
}
