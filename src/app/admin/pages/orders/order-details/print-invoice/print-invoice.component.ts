import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../../../interfaces/order';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.scss']
})
export class PrintInvoiceComponent implements OnInit {

  @Input() order: Order = null;

  constructor() { }

  ngOnInit(): void {
  }

}
