import {Product} from './product';

export interface FeaturedProduct{
  _id: string;
  name: string;
  priority: number;
  products: string[] | Product[];
}
