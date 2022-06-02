import { Pipe, PipeTransform } from '@angular/core';
import {FeaturedEnum} from '../../enum/featured.enum';

@Pipe({
  name: 'featuredStatus'
})
export class FeaturedStatusPipe implements PipeTransform {

  transform(status: string, type?: string): unknown {

    switch (status) {
      case FeaturedEnum.NON_FEATURED : {
        return 'No';
      }
      case FeaturedEnum.FEATURED : {
        return 'Yes';
      }
      default: {
        return '-';
      }
    }

  }

}
