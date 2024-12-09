import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert'; // Import for the alert
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updatedInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(""); // State for error message
    let api_url = "https://api.openweathermap.org/data/2.5/weather";
    let api_key = "8534edf1508885fcb9eb1e374a475fb2";

    let handleWeatherInfo = async () => {
        try {
            let response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                // If the response status is not okay, throw an error
                if (response.status === 404) {
                    throw new Error("City not found!");
                }
                throw new Error("Something went wrong. Please try again.");
            }
            let jsonResponse = await response.json();

            let finalResult = {
                city: city,
                humidity: jsonResponse.main.humidity,
                feelLikes: jsonResponse.main.feels_like,
                temprature: jsonResponse.main.temp,
                maxTemp: jsonResponse.main.temp_max,
                minTemp: jsonResponse.main.temp_min,
                weather: jsonResponse.weather[0].main,
            };
            return finalResult;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };

    let handlebutton = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        let newInfo = await handleWeatherInfo();
        if (newInfo) {
            updatedInfo(newInfo);
            setCity("");
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="City"
                    variant="standard"
                    value={city}
                    onChange={handlebutton}
                    required
                />
                <br /><br />
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    color="primary"
                    size="small"
                    type="submit"
                >
                    Search
                </Button>
            </form>


            {error && (
                <div style={{ marginTop: "10px" }}>
                    {/* <Alert severity="error">{error}</Alert> */}
                    <p>
                        City not found or your input is invalid
                    </p>
                </div>
            )}
        </div>
    );
}
