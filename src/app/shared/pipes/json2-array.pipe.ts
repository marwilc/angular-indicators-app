import { Pipe, PipeTransform } from '@angular/core';
import { Indicator } from 'src/app/core/interfaces/indicators';

@Pipe({
  name: 'json2Array',
})
export class Json2ArrayPipe implements PipeTransform {
  transform(value: any): Indicator[] {
    const keys = Object.keys(value);
    let indicatorsResult: Indicator[] = [];

    keys.forEach((key) => {
      if (key !== 'version' && key !== 'autor' && key !== 'fecha') {
        indicatorsResult.push(value[key]);
      }
    });

    return indicatorsResult;
  }
}
