import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PricesIndicator } from 'src/app/core/interfaces/indicators';
import { IndicatorsService } from 'src/app/core/services/indicators.service';

@Component({
  selector: 'app-prices-indicators',
  templateUrl: './prices-indicators.component.html',
  styleUrls: ['./prices-indicators.component.scss'],
})
export class PricesIndicatorsComponent implements OnInit {
  prices: PricesIndicator = null;
  type: string = '';

  faChevronLeft = faChevronLeft;

  private _subs = new Subscription();

  constructor(private _activateRoute: ActivatedRoute, private _indicators: IndicatorsService) {}

  ngOnInit(): void {
    this.type = this._activateRoute.snapshot.paramMap.get('type');
    this.getDetailIndicator();
  }

  getDetailIndicator() {
    this._subs.add(
      this._indicators.getDetailIndicator(this.type).subscribe((response) => {
        this.prices = response;
      }),
    );
  }
}
