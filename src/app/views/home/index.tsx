import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { Search } from "../../components/Search";
import { GET_WEATHER } from "../../graphql";

import './styles.scss'

type Props = {};

export const Home: React.FC<Props> = () => {

    const [cityName, setCityName] = useState('')

    const { loading, data, refetch } = useQuery(GET_WEATHER,  { variables: { cityName } });
   
    const handleChange = (value?: string) => {
        if(!value) { return; }
        setCityName(value)
        refetch()
        
    }

  return (
    <div className="card">
        <Search value={cityName} onChange={handleChange}/>
        {loading && cityName && <p>Loading...</p>}
        {!loading && cityName && !!!data.getCityByName && <p>Location does not exists.</p>}
        {data && data.getCityByName && 
        <div className="weather-card">
            <div>
                <h1 className="city-name"><span>{data.getCityByName.name}, Current Weather</span></h1>
                <div className="temprature">
                    <img src="https://www.accuweather.com/images/weathericons/04.svg" alt="" />
                    <h1 className="weather">{data.getCityByName.weather.clouds.humidity} <sup>&deg;C</sup></h1>
                </div>
                <h1 className="summary">{ data.getCityByName.weather.summary.description}</h1>
            </div>
            <div>
                <h2 className="label">Humidity: <span>{data.getCityByName.weather.clouds.humidity}%</span></h2>
                <h2 className="label">Min Temperature: <span>{data.getCityByName.weather.temperature.min}</span></h2>
                <h2 className="label">Max Temperature: <span>{data.getCityByName.weather.temperature.max}</span></h2>
                <h2 className="label">Wind: <span>{data.getCityByName.weather.wind.deg} deg, {data.getCityByName.weather.wind.speed} km/h</span></h2>
            </div>
        </div>
        }
    </div>
  );
};


