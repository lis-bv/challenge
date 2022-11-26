import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MapComponent } from '@shared/components/map/map.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MapComponent)
  private mapComponent!: MapComponent;

  constructor() {}

  ngAfterViewInit(): void {
    // The PoIService can be used to get the added pois
    // the mapComponent can be used to add points to the big map
    // don't forget to clear previous graphics first...
  }

  ngOnDestroy(): void {
    // Could be usefull...
  }
}
