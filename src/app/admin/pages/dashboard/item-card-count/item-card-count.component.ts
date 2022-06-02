import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-card-count',
  templateUrl: './item-card-count.component.html',
  styleUrls: ['./item-card-count.component.scss']
})
export class ItemCardCountComponent implements OnInit {

  @Input() route: string;
  @Input() title: string;
  @Input() value: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
