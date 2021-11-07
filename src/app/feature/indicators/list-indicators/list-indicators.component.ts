import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronRight, faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DailyIndicators, Indicator } from 'src/app/core/interfaces/indicators';
import { IndicatorsService } from 'src/app/core/services/indicators.service';

@Component({
  selector: 'app-list-indicators',
  templateUrl: './list-indicators.component.html',
  styleUrls: ['./list-indicators.component.scss'],
})
export class ListIndicatorsComponent implements OnInit, OnDestroy {
  indicators: DailyIndicators = null;
  faInfoCircle: IconDefinition = faInfoCircle;
  faChevronRight: IconDefinition = faChevronRight;

  private _subs = new Subscription();

  constructor(private _router: Router, private _indicators: IndicatorsService) {}

  ngOnInit(): void {
    this._subs.add(
      this._indicators.getAllIndicators().subscribe((response) => {
        this.indicators = response;
      }),
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  goToPrices(indicator: Indicator) {
    this._router.navigate(['/indicators', indicator.codigo, 'prices']);
  }
}
