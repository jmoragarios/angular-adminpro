import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public themeLink: Element | null = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    const url: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.themeLink?.setAttribute('href', url);
  }

}
