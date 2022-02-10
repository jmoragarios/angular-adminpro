import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnChanges {
  
  @Input() title: string = '';
  // Doughnut
  @Input('labels') public doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input() public data: number [] = [ 350, 450, 100 ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.data,
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        hoverBorderColor: [ '#000000', '#000000', '#0000003' ],
      }
    ]
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.data,
          backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
          hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
          hoverBorderColor: [ '#000000', '#000000', '#0000003' ],
        }
      ]
    };
  }
  
}
