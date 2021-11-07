import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailIndicatorsComponent } from './detail-indicators/detail-indicators.component';
import { ListIndicatorsComponent } from './list-indicators/list-indicators.component';
import { PricesIndicatorsComponent } from './prices-indicators/prices-indicators.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListIndicatorsComponent,
  },
  {
    path: ':type/prices',
    component: PricesIndicatorsComponent,
  },
  {
    path: ':type/detail',
    component: DetailIndicatorsComponent,
  },
  { path: '**', pathMatch: '**', redirectTo: '/indicators/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorsRoutingModule {}
