import React from 'react'
import NeshanMap from 'react-neshan-map-leaflet'

export default function MapComponent() {

    return (
        <div className="z-10">
            <NeshanMap
                options={{
                    key: 'web.6181db1f0339460e823e8384e3bca05a',
                    maptype: 'neshan',
                    poi: true,
                    traffic: false,
                    center: [38.0655723, 46.3272969],
                    zoom: 16
                }}

                onInit={(L, myMap) => {
                    let marker = L.marker([38.0655723, 46.3272969])
                        .addTo(myMap)
                        .bindPopup('برج بلور');

                    myMap.on('click', function (e) {
                        marker.setLatLng(e.latlng)
                    });

                    L.circle([38.0655723, 46.3272969], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 100
                    }).addTo(myMap);
                }}
            />
        </div>

    )
}
