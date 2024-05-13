import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GoogleAnalyticsService} from "../../core/services/google-analytics.service";

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
  constructor(public translateSrv: TranslateService,
              private googleAnalyticsSrv: GoogleAnalyticsService) {
    translateSrv.addLangs(['el', 'en']);
    translateSrv.setDefaultLang('el');
    translateSrv.use('el')
    this.googleAnalyticsSrv.trackEvent('footer_loaded', 'footer loaded', 'page_load');
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

  social_media_clicked(media: string) {
    this.googleAnalyticsSrv.trackEvent(media + '_social_media_pressed', 'footer social media pressed: ' + media , 'user_action');
  }

}
