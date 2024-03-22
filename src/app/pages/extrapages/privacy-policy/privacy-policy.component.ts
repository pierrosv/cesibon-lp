import { Component } from '@angular/core';
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
    imports: [
        SharedModule,
        TranslateModule
    ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
