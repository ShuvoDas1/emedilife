import {Pipe, PipeTransform} from '@angular/core';
import {PriceData, Product} from '../../interfaces/product';
import {Cart} from '../../interfaces/cart';
import {ProductUnitType} from '../../interfaces/product-unit-type';

@Pipe({
  name: 'cartUnitType'
})
export class CartUnitTypePipe implements PipeTransform {

  constructor() {
  }

  transform(cart: Cart): string {
    const product = cart.product as Product;
    const priceData = product.prices.find(f => f._id === cart.priceId) as PriceData;

    if (priceData) {
      const unit = priceData.unit as ProductUnitType;
      return `${unit.unitQuantity} ${unit.name}`;
    } else {
      return 'N/A';
    }

  }

}
