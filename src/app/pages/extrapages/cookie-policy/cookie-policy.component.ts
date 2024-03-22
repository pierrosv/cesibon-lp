import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";

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

}
