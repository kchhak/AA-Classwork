import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    
    const coord = {
      lat: location.coords.latitude,
      lon: location.coords.longitude 
    };
    
    url += `lat=${encodeURIComponent(coord.lat)}&`;
    url += `lon=${encodeURIComponent(coord.lon)}`;
    url += '&appid=bcb83c4b54aee8418983c2aff3073b3b';
    
    const xmlReq = new XMLHttpRequest();
    xmlReq.onreadystatechange = () => {
      if (xmlReq.status === 200 && xmlReq.readyState === XMLHttpRequest.DONE){
        let data = JSON.parse(xmlReq.responseText);
        this.setState({weather: data});
      }
    };
  
    xmlReq.open('GET', url, true);
    xmlReq.send();
  }

  render() {
    if (this.state.weather) {
      return (
        <section id="weather">
          <h1>Weather</h1>
          <p> {this.state.weather.description} </p>
        </section>
      )
    } else {
      return(
        <h2>there seems to be no weather</h2>
      )
    }
  }

}
                                                                                                                                                                                                                                                                      