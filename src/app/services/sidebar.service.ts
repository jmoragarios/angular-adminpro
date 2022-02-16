import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: "Main", path: "/"},
        { title: "ProgressBar", path: "progress"},
        { title: "Graph", path: "graph1"}
      ]
    }
  ]
  constructor() { }
}
