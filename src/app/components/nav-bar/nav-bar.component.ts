import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  globalCurrency: string = '';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  getLanguage(e: any){
    if(e.target.value == 1){
      this.useLanguage('en')
    }else {
      this.useLanguage('fr')
    }
  }
  getCurrency(e: any){
    if (e.target.value == 1){
      this.globalCurrency = 'USD'
    }else if (e.target.value == 2){
      this.globalCurrency = 'FCFA'
    }
  }

}
