import React, { useState, useEffect } from 'react'

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

export const Results = ({ query }) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query !== '') fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$where=name%20like%20%27%25${query}%25%27`)
            .then((response) => {
                return response.json();
            })
            .then((parsedData) => {
                setResults(parsedData);
            })
    }, [query]);

    function ChangeMapView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    };

    return (
        <div>
            {!results[0]
                ? null
                :
                <>

                    {/* <ul>
                    <li>{results[0].name}</li>
                    <li>{results[0].mass}</li>
                    <li>{results[0].id}</li>
                </ul> */}
                    <MapContainer
                        style={{ height: "500px", width: "500px" }}
                        center={[51.505, -0.09]}
                        zoom={2}
                        scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {results.map(result => {
                            if (result.geolocation) return <Marker
                                position={[result.geolocation.latitude, result.geolocation.longitude]}>
                            </Marker>
                        })
                        }
                        <ChangeMapView coords={[results[0].geolocation.latitude, results[0].geolocation.longitude]} />
                    </MapContainer>
                </>
            }
        </div>
    )
}
