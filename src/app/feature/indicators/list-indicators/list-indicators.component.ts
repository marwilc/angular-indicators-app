import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronRight, faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DailyIndicators, Indicator } from 'src/app/core/interfaces/indicators';

@Component({
  selector: 'app-list-indicators',
  templateUrl: './list-indicators.component.html',
  styleUrls: ['./list-indicators.component.scss'],
})
export class ListIndicatorsComponent implements OnInit {
  indicators: DailyIndicators = {
    version: '1.7.0',
    autor: 'mindicador.cl',
    fecha: '2021-11-06T15:00:00.000Z',
    uf: {
      codigo: 'uf',
      nombre: 'Unidad de fomento (UF)',
      unidad_medida: 'Pesos',
      fecha: '2021-11-06T03:00:00.000Z',
      valor: 30450.75,
    },
    ivp: {
      codigo: 'ivp',
      nombre: 'Indice de valor promedio (IVP)',
      unidad_medida: 'Pesos',
      fecha: '2021-11-06T03:00:00.000Z',
      valor: 31369.67,
    },
    dolar: {
      codigo: 'dolar',
      nombre: 'Dólar observado',
      unidad_medida: 'Pesos',
      fecha: '2021-11-05T03:00:00.000Z',
      valor: 815.58,
    },
    dolar_intercambio: {
      codigo: 'dolar_intercambio',
      nombre: 'Dólar acuerdo',
      unidad_medida: 'Pesos',
      fecha: '2014-11-13T03:00:00.000Z',
      valor: 758.87,
    },
    euro: {
      codigo: 'euro',
      nombre: 'Euro',
      unidad_medida: 'Pesos',
      fecha: '2021-11-05T03:00:00.000Z',
      valor: 941.78,
    },
    ipc: {
      codigo: 'ipc',
      nombre: 'Indice de Precios al Consumidor (IPC)',
      unidad_medida: 'Porcentaje',
      fecha: '2021-09-01T04:00:00.000Z',
      valor: 1.2,
    },
    utm: {
      codigo: 'utm',
      nombre: 'Unidad Tributaria Mensual (UTM)',
      unidad_medida: 'Pesos',
      fecha: '2021-11-01T03:00:00.000Z',
      valor: 53476,
    },
    imacec: {
      codigo: 'imacec',
      nombre: 'Imacec',
      unidad_medida: 'Porcentaje',
      fecha: '2021-09-01T04:00:00.000Z',
      valor: 15.6,
    },
    tpm: {
      codigo: 'tpm',
      nombre: 'Tasa Política Monetaria (TPM)',
      unidad_medida: 'Porcentaje',
      fecha: '2021-11-05T03:00:00.000Z',
      valor: 2.75,
    },
    libra_cobre: {
      codigo: 'libra_cobre',
      nombre: 'Libra de Cobre',
      unidad_medida: 'Dólar',
      fecha: '2021-11-05T03:00:00.000Z',
      valor: 4.38,
    },
    tasa_desempleo: {
      codigo: 'tasa_desempleo',
      nombre: 'Tasa de desempleo',
      unidad_medida: 'Porcentaje',
      fecha: '2021-09-01T04:00:00.000Z',
      valor: 8.41,
    },
    bitcoin: {
      codigo: 'bitcoin',
      nombre: 'Bitcoin',
      unidad_medida: 'Dólar',
      fecha: '2021-11-04T03:00:00.000Z',
      valor: 61441.83,
    },
  };

  faInfoCircle: IconDefinition = faInfoCircle;
  faChevronRight: IconDefinition = faChevronRight;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToPrices(indicator: Indicator) {
    this._router.navigate(['/indicators', indicator.codigo, 'prices']);
  }
}
