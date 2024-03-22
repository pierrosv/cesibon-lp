import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

/**
 * Footer Component
 */
export class FooterComponent implements OnInit {
  year: number = 2024;
  constructor(public translateSrv: TranslateService) {
    translateSrv.addLangs(['el', 'en']);
    translateSrv.setDefaultLang('el');
    translateSrv.use('el')
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  /**
  * SidebarHide modal
  * @param content modal content
  */
  sidebarShow() {
    document.getElementById('demo-switcher')?.classList.add('show');
    document.querySelector('.vertical-overlay')?.classList.add('show');
  }

  /**
  * SidebarHide modal
  * @param content modal content
  */
  SidebarHide() {
    document.getElementById('demo-switcher')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

}
