import React from 'react';

const WeatherCard = ({dt, temp, temp_min, temp_max, main, icon}) => {
    // create a date object with Date class constructor
    const weekDays =['Sun','Mon','Tues','Wed','Thu','Fri','Sat']
    const date = new Date(dt);
    const day = weekDays[date.getDay()];

    const temperature = Math.round(temp);
    const minTemp = Math.round(temp_min);
    const maxTemp = Math.round(temp_max);


    return (
        <div className="card text-center" >
            <h6>{day}</h6>
            <h6>{date.toLocaleDateString()}</h6>
            <h6>{date.toLocaleTimeString()}</h6>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=''
                className='round-img'
                style={imgStyle}
            />
            <h6>{main}</h6>
            <h6>{temperature}°C</h6>
            <h6>Low: {minTemp}°C / High: {maxTemp}°C</h6>
        </div>
    );
};

const imgStyle ={
    width:'70%',
    margin:'auto'
}

export default WeatherCard;
