import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items =['nicolas','julian',''];
  objeto={};

  power=10;

  products = [
    {
      id:'1',
      image:'assets/images/245px-CapAward.png',
      title:'Camiseta',
      price: 80000,
      description: 'bla bla bla'
    },
    {
      id:'2',
      image:'assets/images/450_1000.jpg',
      title:'Prueba 1',
      price: 80000,
      description: 'bla bla bla'
    },
    {
      id:'3',
      image:'assets/images/1481.jpg',
      title:'Prueba 2',
      price: 80000,
      description: 'bla bla bla'
    },

  ]

addItem(){
    this.items.push('nuevo item');
}

deleteItem(index:number){
  this.items.splice(index, 1);
}
clickproduct(id:number){
   console.log('product');
   console.log(id);
}

}
