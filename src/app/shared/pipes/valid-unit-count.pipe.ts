import { Pipe, PipeTransform } from '@angular/core';
import {PriceData} from '../../interfaces/product';

@Pipe({
  name: 'validUnitTypeCount'
})
export class ValidUnitCountPipe implements PipeTransform {

  transform(priceData: PriceData[], type?: string): number {

    if (priceData && priceData.length) {
      let count = 0;
      priceData.forEach(m => {
        if (m.unit) {
          count += 1;
        }
      });
      return count;
    } else {
      return 0;
    }

  }

}
