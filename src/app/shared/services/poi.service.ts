import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

export interface IPoILocation {
  latitude: number;
  longitude: number;
}

@Injectable()
export class PoIService {
  pois$: BehaviorSubject<IPoILocation[]> = new BehaviorSubject<IPoILocation[]>(
    []
  );

  constructor() {}

  add(poi: IPoILocation) {
    this.pois$.pipe(take(1)).subscribe((pois) => {
      this.pois$.next([...pois, poi]);
    });
  }
}
