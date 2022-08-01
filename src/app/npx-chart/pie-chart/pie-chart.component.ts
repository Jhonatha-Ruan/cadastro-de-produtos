import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexLegend
} from "ng-apexcharts";
import { Carteira } from 'src/app/home/carteira';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  entradas: number = 0
  saidas: number = 0
  quantidades: number = 0
  valores: Carteira[] = [];

  constructor() {
    this.chartOptions = {
      series: [0, 0, 0],
      chart: {
        width: 500,
        type: "pie"
      },
      
      legend: {
        position: "bottom"
      },
      labels: ["Entrada", "Saída", "Quantidades"],
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 430
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
      this.entradas = 0
      this.saidas = 0
      this.quantidades = 0
      for(let i in this.valores){
  
        // Edit Melhor
        if(this.valores[i].caixa === 'Entrada'){
          this.entradas = this.entradas + this.valores[i].valor 
          this.quantidades = this.quantidades + this.valores[i].quantidade
        }if (this.valores[i].caixa === 'Saída') {
          this.saidas = this.saidas + this.valores[i].valor
          this.quantidades = this.quantidades - this.valores[i].quantidade 
        }
      
        // Edit Atv
        // if(this.valores[i].caixa === 'Entrada'){
        //   this.entradas = this.entradas + this.valores[i].valor 
        // }if (this.valores[i].caixa === 'Saída') {
        //   this.saidas = this.saidas + this.valores[i].valor 
        // }if (this.valores[i].caixa === 'Quantidade') {
        //   this.quantidades = this.quantidades + this.valores[i].quantidade
        // }


          
        
      }
  
      this.chartOptions.series = [this.entradas, this.saidas, this.quantidades]
    }
    
  }
}
