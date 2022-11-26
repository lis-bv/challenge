import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { IPoILocation } from '@shared/services/poi.service';

@Component({
  selector: 'lis-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('mapContainer', { read: ElementRef })
  mapContainer!: ElementRef<HTMLElement>;

  // __esri.ViewClickEvent
  mapClicked: any; // this needs to be changed

  private graphicsLayer = new GraphicsLayer();

  constructor() {}

  ngAfterViewInit(): void {
    const map = new Map({
      basemap: 'dark-gray-vector',
    });

    const view = new MapView({
      map: map,
      center: [5.105, 52.077],
      zoom: 11,
      container: this.mapContainer.nativeElement as HTMLDivElement,
    });

    view.on('click', (evt) => {
      this.mapClicked.emit(evt);
    });

    map.add(this.graphicsLayer);
  }

  clearGraphics() {
    this.graphicsLayer.removeAll();
  }

  addGraphic({ latitude, longitude }: IPoILocation) {
    const point = {
      type: 'point',
      longitude,
      latitude,
    };

    const simpleMarkerSymbol = {
      type: 'simple-marker',
      size: 16,
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    };

    const graphic = new Graphic({
      geometry: point as any,
      symbol: simpleMarkerSymbol,
    });

    this.graphicsLayer.add(graphic);
  }
}
