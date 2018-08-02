import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';


import { AngularFireModule } from 'angularfire2';


import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service'
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'Ng6Fire'),
    AngularFirestoreModule, // for database
    MaterializeModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
