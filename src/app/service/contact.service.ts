import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

const ContactList = []

@Injectable({
    providedIn: 'root'
})

export class ContactService{
    constructor() { }

    getContact(){
        return ContactList;
    }
    addContact(contact : Contact){
        ContactList.push(contact);
    }
  

}