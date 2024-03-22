import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
    imports: [
        SharedModule,
        TranslateModule
    ],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent {

}
