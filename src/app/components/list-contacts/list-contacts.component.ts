import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  myContacts : Contact[]

  constructor( private listServ: ContactService ) { }

  ngOnInit(): void {
    this.myContacts = this.listServ.getContact()
    console.log("my contacts : ", this.myContacts)
  }

}
