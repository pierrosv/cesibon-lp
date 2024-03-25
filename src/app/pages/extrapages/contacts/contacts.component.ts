import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {ContactService} from "../../../core/services/contact.service";
import {ContactUsModel} from "../../../core/models/contactUsModel";
import Swal from "sweetalert2";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

/**
 * Contacts Component
 */
export class ContactsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder,
              private translateSrv: TranslateService,
              private contactSrv: ContactService) { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Contact us', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: [''],
      acceptance: [false, [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
    let termsAccepted  = this.validationform.get('acceptance')?.value;
    if (!termsAccepted) {
      Swal.fire({
        icon: 'error',
        title: this.translateSrv.instant('FAILED_PROCESS'),
        text:  this.translateSrv.instant('MUST_ACCEPT_TERMS'),
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: true
      });
      return;
    }

    let contactUs = new ContactUsModel();
    contactUs.name = this.validationform.get('name')?.value;
    contactUs.email = this.validationform.get('email')?.value;
    contactUs.phone = this.validationform.get('phone')?.value;
    contactUs.message = this.validationform.get('message')?.value;

    this.contactSrv.sendContactUsMessage(contactUs).subscribe(x=> {
      if (x) {
        Swal.fire({
          icon: 'success',
          title: this.translateSrv.instant('SUCCESS_PROCESS'),
          text:  this.translateSrv.instant('SUCCESS_CONTACT_US'),
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: true
        });
      }
      else {
        Swal.fire({
          icon: 'error',
          title: this.translateSrv.instant('FAILED_PROCESS'),
          text:  this.translateSrv.instant('FAILED_CONTACT_US'),
          customClass: {
            confirmButton: 'btn btn-primary'
          },
          buttonsStyling: true
        });
      }

    });
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }
}
