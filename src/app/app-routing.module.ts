import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '@pages/overview/overview.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () =>
      import('./pages/overview/overview.module').then((m) => m.OverviewModule),
  },
  // {
  //   path: 'overview',
  //   component: OverviewComponent
  // },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
