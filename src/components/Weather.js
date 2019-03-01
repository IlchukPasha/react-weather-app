import React from 'react';

// class Weather extends React.Component {
//   render(){
//     return (
//       <div>
//       { this.props.city &&
//         <div>
//           <p>Place: {this.props.city}, {this.props.country}</p>
//           <p>Temperature: {this.props.temp}</p>
//           <p>Pressure: {this.props.pressure}</p>
//           <p>Sunset: {this.props.sunset}</p>
//         </div>
//       }
//       {this.props.error}
//       </div>
//     );
//   }
// }

const Weather = props => {
  return ( 
    <div className="infoWeath">
      { props.city &&
        <div>
          <p>Place: {props.city}, {props.country}</p>
          <p>Temperature: {props.temp}</p>
          <p>Pressure: {props.pressure}</p>
          <p>Sunset: {props.sunset}</p>
        </div>
      }
      <p className="error">{props.error}</p>
    </div>
  );
}

export default Weather;