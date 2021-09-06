import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  clickproduct(id:number){
    console.log('product');
    console.log(id);
 }

}
