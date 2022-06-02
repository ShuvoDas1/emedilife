import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
    'Long nineteenth century 2',
    'Long nineteenth century 3',
    'Long nineteenth century 4',
  ];

  chooseImage: string[] = [
    'https://ftp.esquireelectronicsltd.com/uploads/gallery/philips-electric-shaver-at610-14-at-esquire-electronics-ltd-600x600725-9066.jpg',
    'https://ftp.esquireelectronicsltd.com/uploads/gallery/philips-electric-shaver-s1070-at-esquire-electronics-ltd-1000x1000219-2388.jpg',
    'https://ftp.esquireelectronicsltd.com/uploads/gallery/philips-electric-shaver-s1070-at-esquire-electronics-ltd-buy-in-bangladesh-1000x5631158-2386.jpg',
    'https://ftp.esquireelectronicsltd.com/uploads/gallery/philips-electric-shaver-s5050-06-at-esquire-electronics-ltd-1000x1000282-6746.jpg'
  ];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chooseImage, event.previousIndex, event.currentIndex);
    console.log('After Drag & Drop');
    console.log(this.chooseImage);
  }


  constructor() {
  }

  ngOnInit(): void {
    console.log('Current Choose Image');
    console.log(this.chooseImage);
  }

  ngOnDestroy(): void {
  }


  removeSelectImage(data: string) {

  }
}

