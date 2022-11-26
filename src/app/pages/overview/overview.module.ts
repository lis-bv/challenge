import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CreateComponent } from './components/create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OverviewComponent, CreateComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverviewModule {}
