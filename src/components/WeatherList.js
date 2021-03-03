import React from 'react'
import {Col, Row} from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {

    console.log('weathers= ',weathers)
    return (
        <Row>
            {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard
                        temp={main.temp}
                        temp_max={main.temp_max}
                        temp_min={main.temp_min}
                        dt={dt * 1000}
                        main={weather[0].description}
                        icon={weather[0].icon}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;
