import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactUsModel} from "../models/contactUsModel";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactUsMessage(contactUsModel: ContactUsModel):Observable<boolean> {
    const fullUrl = `${environment.apiUrl}/${environment.contactUrl}/contact-us`;
    console.log(fullUrl);
    console.log(contactUsModel);
    return this.http.post<boolean>(fullUrl, contactUsModel);
  }
}
