import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarChartModule, LineChartModule } from '@swimlane/ngx-charts';
import { TilesComponent } from './tiles/tiles.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { ChartsModule } from 'ng2-charts';
import { RecentUsersComponent } from './recent-users/recent-users.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { ItemCardCountComponent } from './item-card-count/item-card-count.component';
import { PipesModule } from './../../../shared/pipes/pipes.module';


const routes: Routes = [


  {
    path: '', component: DashboardComponent
  },

  { path: 'all-card', component: AllCardsComponent },
];


@NgModule({
  declarations: [
    DashboardComponent,
    TilesComponent,
    InfoCardsComponent,
    RecentUsersComponent,
    ItemCardCountComponent,
    AllCardsComponent,


  ],
  imports: [


    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    LineChartModule,
    BarChartModule,
    ChartsModule,
    PipesModule,
  ]
})
export class DashboardModule {
}
