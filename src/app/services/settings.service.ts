import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public themeLink: Element | null = document.querySelector('#theme');
  
  constructor() {
    const url: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.themeLink?.setAttribute('href', url);
   }

   changeTheme(theme:string) {
    
    const url = `./assets/css/colors/${ theme }.css`;
    
    this.themeLink?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach( link => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.themeLink?.getAttribute('href');

      if(currentTheme === btnThemeUrl){
        link.classList.add('working')
      }
    });

  }

}
