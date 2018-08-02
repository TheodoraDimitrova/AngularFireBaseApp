import { Injectable } from "@angular/core";
import {
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  AngularFirestore
} from "angularfire2/firestore"; //import the required modules

import { Item } from "../models/Item";
import { Observable } from "../../../node_modules/rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ItemService {
 
  itemsCollection: AngularFirestoreCollection<Item>;//set type of collection
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;


  constructor(public afs: AngularFirestore) {
   this.itemsCollection=this.afs.collection('items',ref=>ref.orderBy('title','asc'))//sort set collection

    this.items = this.itemsCollection
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Item;
            data.id=a.payload.doc.id
            return data
          
          });
        })
      )
     
  }

  getItems() {
    return this.items;
  }
  addItem(item:Item) {
    this.itemsCollection.add(item)
   
  }
 deleteItem(item:Item){
     this.itemDoc=this.afs.doc(`items/${item.id}`)
     this.itemDoc.delete()
  } 
  updateItem(item:Item){
    this.itemDoc=this.afs.doc(`items/${item.id}`)
    this.itemDoc.update(item)
  }

}
