import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  myId = 0;

  newContact = {
    id: this.myId,
    nombre: '',
    apellido: '',
    ocupacion:'',
    cumple:'',
    calle: '',
    num: '',
    colonia: '',
    opMovil: '',
    opCasa:'',

    email: ''
  }

  constructor(private listServ: ContactService) { }

  ngOnInit(): void {
  }

  addContact() {
    console.log(" :)", this.newContact)
    this.listServ.addContact(this.newContact)
    this.myId++;
    this.newContact = {
      id: 0,
      nombre: '',
      apellido: '',
      ocupacion:'',
      cumple:'',
      calle: '',
      num: '',
      colonia: '',
      opMovil:'',
      opCasa:'',
      email: ''
    }
  }

}
