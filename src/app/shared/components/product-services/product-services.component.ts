import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/interfaces/product-service';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.scss']
})
export class ProductServicesComponent implements OnInit {

  productSericesArray:ProductService[]=[
    {
      _id:'1',
      image:'./assets/images/image/genuine_medicine.png',
      routerLink:"#"
    },
    {
      _id:'2',
      image:'./assets/images/image/widest_range.png',
      routerLink:"#"
    },
    {
      _id:'3',
      image:'./assets/images/image/secure_pakaging.png',
      routerLink:"#"
    }, {
      _id:'4',
      image:'./assets/images/image/assured_savings.png',
      routerLink:"#"
    },
    {
      _id:'5',
      image:'./assets/images/image/secure_transacrtions.png',
      routerLink:"#"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
