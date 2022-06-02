import { Component, OnInit } from '@angular/core';
import { AdminApiService } from './../../../../services/admin-api.service';

@Component({
  selector: 'all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {

  dashboardData: any
  brand: any;
  category: any;
  generic: any;
  orders: any;
  product: any;
  subCategory: any;
  unitTypes: any;

  constructor(
    private AdminApiService: AdminApiService
  ) { }

  ngOnInit(): void {

    this.getDashboardData();
  }

  getDashboardData() {
    this.AdminApiService.getDashboardData()
      .subscribe(res => {
        this.dashboardData = res.data;
        const { brand: brand, category: category, generic: generic, orders: orders, product: product, subCategory: subCategory, unitTypes: unitTypes } = this.dashboardData.counts;
        this.brand = brand;
        this.category = category;
        this.generic = generic;
        this.orders = orders;
        this.product = product;
        this.subCategory = subCategory;
        this.unitTypes = unitTypes;
        console.log("all items:", this.brand, this.category, this.generic, this.orders, this.product, this.subCategory, this.unitTypes);

      },
        error => {
          console.log(error.message);
        });

  }

}
