import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp, temp_min, temp_max, main, icon}) => {
    // create a date object with Date class constructor
    const date = new Date(dt);
    console.log(date.toTimeString());
    const temperature = Math.round(temp);

    return (
        <>

            <Card>
                <Card.Img
                    variant="top"
                    // get the src from example url and pass the icon prop for icon code
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                />
                <Card.Body>
                    <Card.Title>{main}</Card.Title>
                    {/*  datetime is received in milliseconds, let's turn into local date time */}
                    <p>{temperature}°C</p>
                    <p>
                        {date.toDateString()} - {date.toLocaleTimeString()}
                    </p>
                    {/* minimum temperature */}
                    <p>Min: {temp_min}</p>
                    {/* maximum temperature */}
                    <p>Max: {temp_max}</p>
                </Card.Body>
            </Card>
        </>
    );
};
export default WeatherCard;
