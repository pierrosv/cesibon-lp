import { Component } from '@angular/core';
import {LottieComponent} from "ngx-lottie";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-brochure-el',
  standalone: true,
  imports: [
    LottieComponent,
    RouterLink
  ],
  templateUrl: './brochure-el.component.html',
  styleUrl: './brochure-el.component.scss'
})
export class BrochureElComponent {

}
