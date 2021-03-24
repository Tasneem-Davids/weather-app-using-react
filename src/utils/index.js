export const fetchData = async (city, country) => {
    const fetchAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`)
    const response = response.json();
       return response;
}