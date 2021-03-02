import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';

const App = () => {
    const {data, error, isLoading, setUrl} = UseFetch();
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

    const getContent = () => {
        if(error) return <h2>Error when fetching: {error}</h2>
        if(!data && isLoading) return <h2>LOADING...</h2>
        if(!data) return null;
        return <WeatherList weathers={data.list} />
    };

    return (
        <Container className="App">
            <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />

            {/* conditionally render  */}
            {getContent()}
        </Container>
    );
};

export default App;
