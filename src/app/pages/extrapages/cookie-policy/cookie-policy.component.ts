import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {GoogleAnalyticsService} from "../../../core/services";

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [
    SharedModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent {
  constructor(private googleAnalyticsSrv: GoogleAnalyticsService) {
    this.googleAnalyticsSrv.trackEvent('cookie_policy_loaded', 'cookie policy loaded', 'page_load');
  }
}
