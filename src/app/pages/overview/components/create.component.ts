import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MapComponent } from '@shared/components/map/map.component';
import { IPoILocation, PoIService } from '@shared/services/poi.service';

interface ICreateForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  poi: FormControl<IPoILocation | null>;
}

@Component({
  selector: 'lis-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @ViewChild(MapComponent)
  private mapComponent!: MapComponent;

  createForm: FormGroup<ICreateForm>;

  constructor(fb: FormBuilder, private poiService: PoIService) {
    this.createForm = fb.group<ICreateForm>({
      name: new FormControl<string>('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poi: new FormControl<IPoILocation>(null as any, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onMapClicked(evt: __esri.ViewClickEvent) {
    const poi: IPoILocation = {
      latitude: evt.mapPoint.latitude,
      longitude: evt.mapPoint.longitude,
    };

    this.createForm.patchValue({ poi });
    this.mapComponent.clearGraphics();
    this.mapComponent.addGraphic(poi);
  }

  onSubmit() {
    // add point to collection
    const formControl = this.createForm.get('poi');
    this.poiService.add(formControl?.value as IPoILocation);

    this.reset();
  }

  private reset() {
    this.mapComponent.clearGraphics();
    this.createForm.reset();
  }
}
