import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {GoogleAnalyticsService} from "../../../core/services";

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    SharedModule,
    TranslateModule
  ],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss'
})
export class TermsOfUseComponent {
  constructor(private googleAnalyticsSrv: GoogleAnalyticsService) {
    this.googleAnalyticsSrv.trackEvent('terms_of_use_loaded', 'terms of use page loaded', 'page_load');
  }
}
