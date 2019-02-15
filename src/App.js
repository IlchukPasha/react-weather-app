import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const OPEN_WEATHER_API_KEY = "86a0c46c01930e42eb7d85f69ca0775c";

class App extends React.Component {

  getWeather = async () => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
    data = await data.json();
    console.log('data: ', data);
  }

  render() {
    return (
      <div>
        {this.getWeather()}
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;