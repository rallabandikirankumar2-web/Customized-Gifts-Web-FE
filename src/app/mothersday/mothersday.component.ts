import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mothersday',
  templateUrl: './mothersday.component.html',
  styleUrls: ['./mothersday.component.css']
})
export class MothersdayComponent implements OnInit{

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:7001, name:"Printed Mug Combo",price:399.00,  imgsrc:"assets/Images/w2.jpeg"},
    {id:7002, name:"Photo Frame", price:499.00,  imgsrc:"assets/Images/n4.jpeg"},
    {id:7003, name:"Photo Frame",  price:699.00,  imgsrc:"assets/Images/n5.jpeg"},
    {id:7004, name:"Wooden Carving",  price:599.00,  imgsrc:"assets/Images/n6.jpeg"},
    {id:7005, name:"Printed Mug", price:299.00, imgsrc:"assets/Images/w3.jpeg"},
    {id:7006, name:"Wooden Carving", price:499.00,  imgsrc:"assets/Images/n7.jpeg"},
    {id:7007, name:"Wooden Frame", price:499.00, imgsrc:"assets/Images/n10.jpeg"}
    
    
  
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

