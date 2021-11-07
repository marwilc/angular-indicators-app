import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailIndicatorsComponent } from './detail-indicators/detail-indicators.component';
import { HomeIndicatorsComponent } from './home-indicators/home-indicators.component';
import { IndicatorsRoutingModule } from './indicators-routing.module';
import { ListIndicatorsComponent } from './list-indicators/list-indicators.component';
import { PricesIndicatorsComponent } from './prices-indicators/prices-indicators.component';
import { SubHeaderIndicatorsComponent } from './sub-header-indicators/sub-header-indicators.component';

@NgModule({
  declarations: [
    ListIndicatorsComponent,
    HomeIndicatorsComponent,
    PricesIndicatorsComponent,
    DetailIndicatorsComponent,
    SubHeaderIndicatorsComponent,
  ],
  imports: [SharedModule, CommonModule, IndicatorsRoutingModule],
})
export class IndicatorsModule {}
