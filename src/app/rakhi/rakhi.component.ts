import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-rakhi',
  templateUrl: './rakhi.component.html',
  styleUrls: ['./rakhi.component.css']
})
export class RakhiComponent implements OnInit  {

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:9001, name:"Name Bands",price:299.00,  imgsrc:"assets/Images/r1.jpeg"},
    {id:9002, name:"Name Bands", price:299.00,  imgsrc:"assets/Images/r2.jpeg"}

    
  
  ];
  this.products.forEach((a:any) => {
    Object.assign(a,{quantity:1,total:a.price});
    
  });

}




  ngOnInit(): void {
  
  }
  addToCart(product:any){
    this.userService.addToCart(product);
  }



}



