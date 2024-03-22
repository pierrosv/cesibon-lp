import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

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

}
