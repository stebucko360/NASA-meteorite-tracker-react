import React, { useState, useEffect, useRef } from 'react'

import { MapContainer, TileLayer, Marker, useMap, Popup, useMapEvents } from 'react-leaflet'

export const Results = ({ query }) => {

    const [results, setResults] = useState([]);
    const [coords, setCoords] = useState([0, 40]);

    const notInitialRender = useRef(false)

    useEffect(() => {
        if (notInitialRender.current) {
            fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$where=name%20like%20%27%25${query}%25%27`)
                .then((response) => {
                    return response.json();
                })
                .then((parsedData) => {
                    console.log(parsedData)
                    setCoords([0, 0])
                    setResults(parsedData);
                })
        } else {
            notInitialRender.current = true
        }
    }, [query]);

    function ChangeMapView({coordinates}) {
        
        const map = useMap();
        if (coords[0] !== 0 ) {
            map.setZoom(8)
        } 
        if (coords[0] === 0 ){
            map.setZoom(3)
        }
        map.setView(coordinates, map.getZoom());
        return null;
    };
    
    return (
        <div>
            
            <MapContainer
                className='map'
                center={[0, 0]}
                 zoom={3}
                scrollWheelZoom={true}>
                 <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {results.map(result => {
                            if (result.geolocation) return <Marker
                                eventHandlers={{ click: ()=>{setCoords([result.geolocation.latitude, result.geolocation.longitude])}}}
                                position={[result.geolocation.latitude, result.geolocation.longitude]}>
                                    <Popup >
                                        Name : {result.name} <br/>
                                        ID : {result.id} <br/>
                                        Mass : {result.mass} <br/>
                                        Year: { result.year && result.year.slice(0, 4)}
                                    </Popup>
                            </Marker>
                        })
                        }
                        <ChangeMapView coordinates={coords} />
             </MapContainer>             
        </div>
    )
}

