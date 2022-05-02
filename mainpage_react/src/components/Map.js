/*global kakao*/ 
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
                    right: "65px"
                    }}>  
            </div>
        </div>
    )
}

export default Map;