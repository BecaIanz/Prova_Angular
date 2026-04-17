import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { ContactDto } from './interfaces/ContactInterface';

@Injectable({
  providedIn: 'root',
})
export class ContactApi extends Api{
    getAllContacts = () : Observable<ContactDto[]> => {
        return this.client.get<ContactDto[]>(`${this.URL}/contacts`).pipe()
    }
    addContact = (data: ContactDto) : Observable<ContactDto> => {
        return this.client.post<ContactDto>(`${this.URL}/contacts`, data).pipe()
    }
}