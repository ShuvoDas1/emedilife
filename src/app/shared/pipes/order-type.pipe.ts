import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderType'
})
export class OrderTypePipe implements PipeTransform {

  transform(orderType: string, type?: string): unknown {

    switch (orderType) {
      case '0' : {
        return 'Regular';
      }
      case '1' : {
        return 'Prescription';
      }
      default: {
        return '-';
      }
    }

  }

}
