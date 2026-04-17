import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ContactApi } from '../../domain/contact.api';
import { ContactButton } from '../../shared/contact-button/contact-button';
import { ContactDto } from '../../domain/interfaces/ContactInterface';
import { Button } from '../../shared/button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [
    Header,
    Button, 
    FormsModule,
    ContactButton
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

  protected contacts: ContactDto[] = []
  title: string = "Contacts"
  AddContactButton: string = "Adicionar Contato"

  newContact!: ContactDto

  constructor(private api: ContactApi){}

  getContact = () => {
    this.api.getAllContacts().subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("contacts", JSON.stringify(res))
        this.contacts = JSON.parse(sessionStorage.getItem("contacts") || "[]")
      }
    )
  }

  addContact = () => {
    this.api.addContact(this.newContact).subscribe(
      res => {
        console.log(res)
      }
    )
  }


}
