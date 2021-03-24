import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ShowWeather from './ShowWeather';

function Weather(){

    const APIKEY = "3a8de3dc056f3380ba0a195e05dc881a";

    const [form, setForm] = useState ({
        city: "",
        country: ""
    })

    const [weather, setWeather] = useState ([]);

    async function weatherData(e){

        e.preventDefault();

        if(form.city == ""){
            alert("Please enter a city and country.")
        } else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
                ).then(res => res.json())
                .then((data) => setWeather({
                    data: data
                }))
                .then((data) => console.log(data))
                .catch((err) => (err))
                
        }
    }

    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city"){
            setForm({...form, city: value})
        }
        if(name == "country"){
            setForm({...form, country: value})
        }
    }

   
    return (
        <div>
            <h1 className="Heading">Weather App</h1>
            <br/>

            <Form className="Form" style={{width:"1000px"}}>
                <Form.Row>
                    <Col>
                        <Form.Control name="city" placeholder="City" onChange={e => handleChange(e)}/>
                    </Col>
                    <Col>
                        <Form.Control name="country" placeholder="Country" onChange={e => handleChange(e)}/>
                    </Col>
                    <Col>
                    <Button className="Button" onClick={e => weatherData(e)}>Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
            { weather.data != undefined ? 
            
            <div><ShowWeather data={weather.data}/></div>
            : 
            null 
            }

        </div>
    );
}

export default Weather;
