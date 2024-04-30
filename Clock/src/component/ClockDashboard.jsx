import React from 'react'
import CityTime from './CityTime'


export default function ClockDashboard() {
  const cities =[
      {name: "New York",timezone:"America/New_York"},
      {name: "London",timezone:"Europe/London" },
      {name: "Tokyo",timezone:"Asia/Tokyo" },
      {name: "Paris",timezone:"Europe/Paris" }
    ];

  
  return (
    
    <div className="world-clock">
        <h1 className='Clockk'>Clock Dashboard</h1>
          <ul className='cities'>
            {cities.map((city, index)=>(
          <CityTime city={city} key={index} />
        ))}
          </ul>    
    </div>
  );
}

