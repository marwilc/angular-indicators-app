import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PricesIndicator } from 'src/app/core/interfaces/indicators';

@Component({
  selector: 'app-detail-indicators',
  templateUrl: './detail-indicators.component.html',
  styleUrls: ['./detail-indicators.component.scss'],
})
export class DetailIndicatorsComponent implements OnInit {
  type: string = '';

  indicator: PricesIndicator = {
    version: '1.7.0',
    autor: 'mindicador.cl',
    codigo: 'euro',
    nombre: 'Euro',
    unidad_medida: 'Pesos',
    serie: [
      { fecha: '2021-11-05T03:00:00.000Z', valor: 941.78 },
      { fecha: '2021-11-04T03:00:00.000Z', valor: 944.33 },
      { fecha: '2021-11-03T03:00:00.000Z', valor: 943.05 },
      { fecha: '2021-11-02T03:00:00.000Z', valor: 937.03 },
      { fecha: '2021-10-29T03:00:00.000Z', valor: 940.97 },
      { fecha: '2021-10-28T03:00:00.000Z', valor: 933.84 },
      { fecha: '2021-10-27T03:00:00.000Z', valor: 935.02 },
      { fecha: '2021-10-26T03:00:00.000Z', valor: 940.73 },
      { fecha: '2021-10-25T03:00:00.000Z', valor: 949.4 },
      { fecha: '2021-10-22T03:00:00.000Z', valor: 951.48 },
      { fecha: '2021-10-21T03:00:00.000Z', valor: 945.64 },
      { fecha: '2021-10-20T03:00:00.000Z', valor: 946.83 },
      { fecha: '2021-10-19T03:00:00.000Z', valor: 952.72 },
      { fecha: '2021-10-18T03:00:00.000Z', valor: 958.12 },
      { fecha: '2021-10-15T03:00:00.000Z', valor: 946.59 },
      { fecha: '2021-10-14T03:00:00.000Z', valor: 950.39 },
      { fecha: '2021-10-13T03:00:00.000Z', valor: 953.74 },
      { fecha: '2021-10-12T03:00:00.000Z', valor: 948.29 },
      { fecha: '2021-10-08T03:00:00.000Z', valor: 940.82 },
      { fecha: '2021-10-07T03:00:00.000Z', valor: 942.59 },
      { fecha: '2021-10-06T03:00:00.000Z', valor: 940.62 },
      { fecha: '2021-10-05T03:00:00.000Z', valor: 936.32 },
      { fecha: '2021-10-04T03:00:00.000Z', valor: 932.38 },
      { fecha: '2021-10-01T03:00:00.000Z', valor: 939.48 },
      { fecha: '2021-09-30T03:00:00.000Z', valor: 932.24 },
      { fecha: '2021-09-29T03:00:00.000Z', valor: 932.98 },
      { fecha: '2021-09-28T03:00:00.000Z', valor: 930.93 },
      { fecha: '2021-09-27T03:00:00.000Z', valor: 924.51 },
      { fecha: '2021-09-24T03:00:00.000Z', valor: 924.64 },
      { fecha: '2021-09-23T03:00:00.000Z', valor: 920.64 },
      { fecha: '2021-09-22T03:00:00.000Z', valor: 920.51 },
    ],
  };

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

  constructor(
    private _activateRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.type = this._activateRoute.snapshot.paramMap.get('type');

    const { unidad_medida, serie, nombre } = this.indicator;

    this.indicatorForm.patchValue({ unit: unidad_medida, name: nombre, date: serie[0].fecha });

    this.lineChartData = [
      {
        data: this.indicator.serie.map((v) => v.valor),
        label: `Precios del ${this.indicator.nombre}`,
      },
    ];
    this.lineChartLabels = this.indicator.serie.map((v) =>
      this.datePipe.transform(v.fecha, 'dd/MM/YY'),
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
