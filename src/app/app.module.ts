import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    ContactsComponent,
    ListContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
