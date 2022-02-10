import { Component } from '@angular/core';
import { ChartData } from "chart.js";

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styles: ['']
})
export class Chart1Component {

  public labels1: string[] = [ 'Warehouse 1', 'Warehouse 2', 'Warehouse 3' ];
  public data1: number[] = [ 300, 200, 150 ];
  
  public labels2: string[] = [ 'Main Store', 'Outlet Store', 'Storage Place' ];
  public data2: number[] = [ 35, 500, 175 ];

}
