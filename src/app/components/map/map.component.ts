import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input() map:{ lat: string; lng: string; } | undefined;
  public markers: any[];
  public zoom: number;
  public center: any

  constructor() {
    this.markers = [];
    this.zoom = 10;
  }

  ngOnInit() {
    this.center = {
      lat: parseFloat(this.map?.lat!),
      lng: parseFloat(this.map?.lng!)
    };
  }
}
