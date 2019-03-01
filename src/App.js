import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const OPEN_WEATHER_API_KEY = "86a0c46c01930e42eb7d85f69ca0775c";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if(city){
      let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
      data = await data.json();

      const sunset = data.sys.sunset;
      const date = new Date(sunset * 1000);
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      const seconds = "0" + date.getSeconds();
      const sunsetDate = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Pleace enter city name"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.getWeather} />
                <Weather 
                  temp = {this.state.temp}
                  city = {this.state.city}
                  country = {this.state.country}
                  pressure = {this.state.pressure}
                  sunset = {this.state.sunset}
                  error = {this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;