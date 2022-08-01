import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarsChartComponent } from './bars-chart/bars-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { DonutChartComponent } from './donut-chart/donut-chart.component';




@NgModule({
  declarations: [
    PieChartComponent,
    BarsChartComponent,
    DonutChartComponent
  ],
  imports: [    
    BrowserModule,
    CommonModule,
    NgApexchartsModule,
    NpxChartModule,
  ]
})
export class NpxChartModule { }
