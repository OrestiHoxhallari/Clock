import './App.css'
import ClockDashboard from './component/ClockDashboard';
import './component/CityTimer.css'
import React, {useState} from 'react';
import img from "./component/newYork.jpg"
import img1 from "./component/london.jpg"
import img2 from "./component/tokyo.jpg"
import img3 from "./component/paris.jpg"


function App  () {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      img,img1,img2,img3,
    ]
    const changeBackground =()=>{
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex)
    }
    
    
    
  
  
  return ( 
  <section className="img" style={{backgroundImage: `url(${images[currentImageIndex]})`,borderRadius: '10px',backgroundSize: 'cover'}}>
    <ClockDashboard />
    <button className='buttonDisplay' onClick={changeBackground}>Change Background</button>
  </section>
  );
}



export default App
