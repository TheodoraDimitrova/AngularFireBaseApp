import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Item } from "../../models/Item";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }
  deleteItem(event, item:Item) {
    this.clearState()
    this.itemService.deleteItem(item);
    
  }

  editItem(event, item:Item) {
    // console.log(event)
    // console.log(item)
    this.itemToEdit = item;
    this.editState = true;
  }
  updateItem(item:Item){
    this.clearState()
    this.itemService.updateItem(item)

  }
  clearState(){
    this.editState=false
    this.itemToEdit=null
  }



}
