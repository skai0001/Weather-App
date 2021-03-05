import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';
import Navbar from "./components/Navbar";
import Alert from './components/Alert';

const App = () => {
    const {data, error, isLoading, setUrl} = UseFetch();
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

    const fetchData = (city) => {
        setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=15&appid=${API_KEY}`);
    }

    const getContent = () => {
        if (error) return <Alert error={error}/>
        if (!data && isLoading) return <h2>LOADING...</h2>
        if (!data) return null;
        return <WeatherList weathers={data.list}/>
    };




    return (
        <div className="container-fluid">
            <Navbar/>

            <CitySelector onSearch={fetchData}/>
            <div className='container'>
                {getContent()}
            </div>

        </div>


    );
};

export default App;
