import {Injectable} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Autoplay,Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination, Navigation]);

@Injectable({
  providedIn: 'root'
})
export class CarouselCtrService {

  constructor() {
  }


  


}
