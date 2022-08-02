/*function App() {
  return (
    <header>
      <div>
        <div className="div-right">
          <h1>Lora IoT Management System</h1>
          <div className='div-mapbox'>
            <Map />;
          </div>
        </div>

        <div className="div-left">
          <ul>
              <li><Button variant="contained" startIcon={<AccountCircleIcon></AccountCircleIcon>}>USER A</Button></li>
              <li><Button variant="contained" startIcon={<HomeIcon></HomeIcon>}>MAIN</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE1</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE2</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE3</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE4</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE5</Button></li>
              <li><Button variant="contained" startIcon={<LocationOnIcon></LocationOnIcon>}>SITE6</Button></li>
          </ul>
        </div>
        

      </div>
    </header>
  );
}
export default App;*/

/*global kakao*/ 
// eslint-disable-next-line
import { borderRadius } from '@mui/system';
import React, { useEffect } from 'react';


const Map = () => {

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.604015196660264, 126.95538072399044),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.604015196660264, 126.95538072399044); 
    var marker = new kakao.maps.Marker({
            position: markerPosition
        });
    marker.setMap(map);
    }, [])

   

    return (
        <div>
           <div 
                id="map" style={{
                    width:"600px",
                    height:"550px",
                    right: "65px",
                    borderRadius: "30px",
                    }}>  
            </div>
        </div>
    )
}

export default Map;