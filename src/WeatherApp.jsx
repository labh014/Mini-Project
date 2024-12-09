import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function() {
    let [weather, setWeather] = useState({
        city: "",
        humidity: 0,
        feelLikes: 0,
        temprature: 0,
        maxTemp: 0,
        minTemp:  0,
        weather: ".........",
    });
    
    let updatedInfo = (result) => {
        setWeather(result);
    }
    
    return (
        <div>
            <h3> Weather Update </h3>
            <SearchBox updatedInfo={updatedInfo}/><br /><br />
            <InfoBox info={weather}/>
        </div>
    )
}