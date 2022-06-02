import {Pipe, PipeTransform} from '@angular/core';
import {DiscountTypeEnum} from '../../enum/discount-type.enum';
import {PriceData} from '../../interfaces/product';
import {UtilsService} from '../../services/utils.service';

@Pipe({
  name: 'priceData'
})
export class PriceDataPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {
  }

  transform(price: PriceData, type: string, quantity?: number): number {

    if (price) {
      switch (type) {
        case 'priceWithDiscount': {
          if (price.discountType === DiscountTypeEnum.PERCENTAGE) {
            const disPrice = (price?.discountAmount / 100) * price?.price;
            if (quantity) {
              return this.utilsService.toFixedNumber(((price?.price - disPrice) * quantity), 2);
            }
            return this.utilsService.toFixedNumber((price?.price - disPrice), 2);
          } else if (price.discountType === DiscountTypeEnum.CASH) {
            if (quantity) {
              return this.utilsService.toFixedNumber(((price?.price - price.discountAmount) * quantity), 2);
            }
            return this.utilsService.toFixedNumber((price?.price - price.discountAmount), 2);
          } else {
            if (quantity) {
              return this.utilsService.toFixedNumber(((price?.price) * quantity), 2);
            }
            return this.utilsService.toFixedNumber((price?.price), 2);
          }
        }
        case 'discountPrice': {
          if (price.discountType === DiscountTypeEnum.PERCENTAGE) {
            if (quantity) {
              return this.utilsService.toFixedNumber(((price?.discountAmount / 100) * price?.price) * quantity, 2);
            }
            return this.utilsService.toFixedNumber((price?.discountAmount / 100) * price?.price, 2);
          } else if (price.discountType === DiscountTypeEnum.CASH) {
            if (quantity) {
              return this.utilsService.toFixedNumber(price?.discountAmount * quantity, 2);
            }
            return this.utilsService.toFixedNumber(price?.discountAmount, 2);
          } else {
            return 0;
          }
        }
        case 'discountPercentage': {
          if (price.discountType === DiscountTypeEnum.PERCENTAGE) {
            if (quantity) {
              return price?.discountAmount;
            }
            return price?.discountAmount;
          } else if (price.discountType === DiscountTypeEnum.CASH) {
            if (quantity) {
              return Math.round((price?.discountAmount / price?.price) * 100);
            }
            return Math.round((price?.discountAmount / price?.price) * 100);
          } else {
            return 0;
          }
        }
        default: {
          return price?.price;
        }
      }
    } else {
      return 0;
    }

  }

}
