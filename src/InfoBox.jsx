import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import './InfoBox.css'

export default function({info}) {
   
    let init_url = "https://media.istockphoto.com/id/904784522/photo/dramatic-sky.jpg?s=2048x2048&w=is&k=20&c=cVJk3nVyJJkDJBzfaWyP9qF42MU3ykGOsCKWZa62T_o=";
    let hot_url = "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    let cold_url = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=612x612&w=0&k=20&c=HBpXbY4mvVDxUowmAibqHYvNqi-wIEU9DmXFxW4Cj98=";
    let rain_url = "https://centralca.cdn-anvilcms.net/media/images/2019/01/02/images/Rainy_Weather_pix.max-1200x675.jpg";

    return (
        <div className='infoBox'>

            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={info.humidity > 70 ? rain_url : info.temprature > 20 ? hot_url :    info.temprature==0?init_url:cold_url }
                
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city} &nbsp;
                  {info.humidity > 70 ? <ThunderstormIcon/> : info.temprature > 20 ? <LightModeIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                  <div>
                      <ul>
                          <li>Temprature : {info.temprature}&deg;C</li>
                          <li>Humidity : {info.humidity}&deg;C</li>
                          <li>Weather feels like : {info.feelLikes}&deg;C</li>
                          <li>Max. Temperature : {info.maxTemp}&deg;C</li>
                          <li>Min. Temperature : {info.minTemp}&deg;C</li>
                          <li>Weather can be described as <i><b>{info.weather}</b></i></li>
                      </ul> 
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </div>
    )
}