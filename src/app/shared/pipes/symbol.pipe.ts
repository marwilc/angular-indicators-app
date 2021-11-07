import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbol',
})
export class SymbolPipe implements PipeTransform {
  constructor(private _currencyPipe: CurrencyPipe, private _decimal: DecimalPipe) {}

  transform(value: number, type: string) {
    if (type === 'Pesos') {
      return `${this._decimal.transform(value)} CLP`;
    }

    if (type === 'Porcentaje') {
      return `${value} %`;
    }

    return this._currencyPipe.transform(value);
  }
}
