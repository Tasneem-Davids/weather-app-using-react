import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowWeather.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

function ShowWeather(props) {
    console.log(props);

    const { data } = props;

    const icon = "http://openweathermap.org/img/wn/" + `${data.cod != 404 ? data.weather[0].icon : null}` + ".png";

    return (
        <div>
            {
                data.cod != 404 ?

                <div>
                     <Card className="Card">
                <Card.Body>
                <Card.Title className="City"><b>{data.name}, {data.sys.country}</b></Card.Title>
                <Card.Text className="Time">At current time: {new Date().toLocaleTimeString()}</Card.Text>
                <Card.Text className="Degrees"><b>{Math.floor(data.main.temp - 273.15)}<sup>o</sup></b><Image className="Icon" src={icon}/></Card.Text>
                <Card.Text className="Weather">{data.weather[0].main}, {data.weather[0].description}</Card.Text>
                <Card.Text>
                    <Table className="Table">
                        <thead>
                            <tr>
                                <td>
                                    <h4>High/Low</h4>
                                </td>
                                <td>
                                    <h4>Humidity</h4>
                                </td>
                                <td>
                                    <h4>Pressure</h4>
                                </td>
                                <td>
                                    <h4>Visibility</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {Math.floor(data.main.temp_max - 273.15)} / {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C
                                </td>
                                <td>
                                {data.main.humidity} %
                                </td>
                                <td>
                                {data.main.pressure} hPa
                                </td>
                                <td>
                                {data.visibility / 1000} Km
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Wind</h4>
                                </td>
                                <td>
                                    <h4>Wind Direction</h4>
                                </td>
                                <td>
                                    <h4>Sunrise</h4>
                                </td>
                                <td>
                                    <h4>Sunset</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {Math.floor((data.wind.speed*18)/5)} Km/hr
                                </td>
                                <td>
                                {data.wind.deg} <sup>o</sup> deg
                                </td>
                                <td>
                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                </td>
                                <td>
                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
                </Card.Body>
            </Card>
                </div> :

                    <div>
                        <h1 style={{border: "blueviolet", marginTop:"50px", color:"red"}}>{data.message}! Please check your spelling.</h1>
                    </div>
            }
           
        </div>
    );
}

export default ShowWeather;
