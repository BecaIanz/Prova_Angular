import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  standalone:true,
  imports: [],
  templateUrl: './contact-button.html',
  styleUrl: './contact-button.css',
})
export class ContactButton {
  @Input()
  UserName: string = ""
  @Input()
  Phone: string = ""
}
