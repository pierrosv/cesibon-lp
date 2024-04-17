import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { AboutComponent } from "./about/about.component";
import { BlogGridComponent } from "./blog-grid/blog-grid.component";
import { SingleBlogComponent } from "./single-blog/single-blog.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HelpCenterComponent } from "./help-center/help-center.component"
import {TermsOfUseComponent} from "./terms-of-use/terms-of-use.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {CookiePolicyComponent} from "./cookie-policy/cookie-policy.component";
import {BrochureElComponent} from "./brochure-el/brochure-el.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "terms-of-use",
    component: TermsOfUseComponent
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent
  },
  {
    path: "cookies-policy",
    component: CookiePolicyComponent
  },
  {
    path: "blog-grid",
    component: BlogGridComponent
  },
  {
    path: "single-blog",
    component: SingleBlogComponent
  },
  {
    path : "contacts",
    component: ContactsComponent
  },
  {
    path: "help-center",
    component: HelpCenterComponent
  },
  {
    path: "brochure-el",
    component: BrochureElComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtraPagesRoutingModule {}
