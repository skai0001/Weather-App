import React from 'react'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <div style={userStyle}>
            {weathers.map(({dt, main, weather}) => (
                <WeatherCard
                    key = {dt}
                    temp={main.temp}
                    temp_max={main.temp_max}
                    temp_min={main.temp_min}
                    dt={dt * 1000}
                    main={weather[0].description}
                    icon={weather[0].icon}
                />
            ))}
        </div>
    )
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1rem'
};

export default WeatherList;
