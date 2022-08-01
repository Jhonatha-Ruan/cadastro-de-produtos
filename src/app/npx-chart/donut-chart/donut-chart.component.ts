import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
} from "ng-apexcharts";
import { Carteira } from 'src/app/home/carteira';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;

  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  quantidades: number = 0
  valores: Carteira[] = [];

  constructor() {
    this.chartOptions = {
      series: [0],
      chart: {
        type: "donut",
        width: 450,
      },
      
      labels: ["Quantidades"],
      
      responsive: [
        {
          breakpoint: 100000000,
          options: {
            colors: ["#feb019"],
            chart: {
              width: 430,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(){
    this.populateChart()

    setInterval(() => {
      this.populateChart()
    }, 5000)
  }

  populateChart(){
    
    this.valores = JSON.parse(localStorage.getItem("carteira"))

    console.log(this.valores)
    
    if(this.valores != null){
      this.quantidades = 0
      for(let i in this.valores){
  
        //Edit Melhor
        if(this.valores[i].caixa === 'Entrada'){ 
          this.quantidades = this.quantidades + this.valores[i].quantidade
        }if (this.valores[i].caixa === 'Saída') {
          this.quantidades = this.quantidades - this.valores[i].quantidade 
        } 
        
        // Edit Atv
        // if(this.valores[i].caixa === 'Quantidade'){ 
        //   this.quantidades = this.quantidades + this.valores[i].quantidade
        // }
  
      this.chartOptions.series = [this.quantidades]
    }
    
  }
}
}