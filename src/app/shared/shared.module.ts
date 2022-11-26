import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { PoIService } from './services/poi.service';

@NgModule({
  declarations: [MapComponent],
  providers: [PoIService],
  imports: [CommonModule],
  exports: [MapComponent],
})
export class SharedModule {}
