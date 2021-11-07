import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndicatorsComponent } from './indicators/home-indicators/home-indicators.component';

const routes: Routes = [
  {
    path: 'indicators',
    component: HomeIndicatorsComponent,
    loadChildren: () => import('./indicators/indicators.module').then((i) => i.IndicatorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
