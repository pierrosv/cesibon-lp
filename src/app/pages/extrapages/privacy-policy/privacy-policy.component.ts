import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {GoogleAnalyticsService} from "../../../core/services";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    SharedModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private googleAnalyticsSrv: GoogleAnalyticsService) {
    this.googleAnalyticsSrv.trackEvent('privacy_policy_loaded', 'privacy policy loaded', 'page_load');
  }
}
