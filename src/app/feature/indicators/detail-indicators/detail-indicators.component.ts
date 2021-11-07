import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { PricesIndicator } from 'src/app/core/interfaces/indicators';
import { IndicatorsService } from 'src/app/core/services/indicators.service';

@Component({
  selector: 'app-detail-indicators',
  templateUrl: './detail-indicators.component.html',
  styleUrls: ['./detail-indicators.component.scss'],
})
export class DetailIndicatorsComponent implements OnInit, OnDestroy {
  type: string = '';

  indicator: PricesIndicator = null;

  indicatorForm: FormGroup = this._createForm();

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#03A9F4',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  private _subs = new Subscription();

  constructor(
    private _activateRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private datePipe: DatePipe,
    private _indicators: IndicatorsService,
  ) {}

  ngOnInit(): void {
    this.type = this._activateRoute.snapshot.paramMap.get('type');

    this.getDetailIndicator();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  getDetailIndicator() {
    this._subs.add(
      this._indicators.getDetailIndicator(this.type).subscribe((response) => {
        this.indicator = response;

        this.patchValueIndicator();
      }),
    );
  }

  patchValueIndicator() {
    const { unidad_medida, serie, nombre } = this.indicator;

    this.indicatorForm.patchValue({
      unit: unidad_medida,
      name: nombre,
      date: this.datePipe.transform(serie[0].fecha, 'dd/MM/YYYY'),
    });

    this.lineChartData = [
      {
        data: this.indicator.serie.reverse().map((v) => v.valor),
        label: `Precios del ${this.indicator.nombre}`,
      },
    ];
    this.lineChartLabels = this.indicator.serie.map((v) =>
      this.datePipe.transform(v.fecha, 'dd/MM/YYYY'),
    );
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      name: '',
      unit: '',
      date: '',
    });
  }
}
