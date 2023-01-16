import React, { useEffect } from 'react';
import MapLibre from 'maplibre-gl';
import { Marker, Popup, MapboxLayer} from 'maplibre-gl';

const Map = () => {
    useEffect(() => {
        const map = new MapLibre.Map({
            container: 'map',
            style: {
                'version': 8,
                'sources': {
                'raster-tiles': {
                        'type': 'raster',
                        'tiles': [
                                    'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=FsnPeuzvqAnUNpTUumZN'
                            ],
                        'tileSize': 256,
                    }
                },
                'layers': [
                    {
                    'id': 'simple-tiles',
                    'type': 'raster',
                    'source': 'raster-tiles',
                    'minzoom': 0,
                    'maxzoom': 22
                    }
                ]
                },
            center: [-73.567256, 45.501690],
            zoom: 12
        });

        const marker = new Marker({
            draggable: true,
            color: 'red',
            icon: 'circle',
            size: 'large'
        }).setLngLat([-73.567256, 45.501690]).addTo(map);
        
        const popup = new Popup({
            closeButton: true,
            closeOnClick: false
        }).setText('Blocshop Bouldering').setLngLat([-73.567256, 45.501690]).addTo(map);
        
        marker.setPopup(popup);

        return () => {
            map.remove();
            marker.remove();
        };

    }, []);

    return (
        <div>
            <h1>Test Map using MapLibre</h1>
            <div id="map" style={{ width: '70vw', height: '70vh' }} />
        </div>
    )
}

export default Map;