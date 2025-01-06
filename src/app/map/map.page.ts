import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: false
})
export class MapPage implements OnInit {

  map: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const latitude = parseFloat(params['latitude']);
      const longitude = parseFloat(params['longitude']);

      this.initializeMap(latitude, longitude);
    });
  }

  initializeMap(latitude: number, longitude: number) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2Vsbm9vYyIsImEiOiJjbTVrN2M0dDIxZWJpMmpweHZvcndwdHhqIn0.KkkJN8UPRVM1MFPa7JzVtg'

    
    this.map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [longitude, latitude], 
      zoom: 14, 
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(this.map);
  }

}
