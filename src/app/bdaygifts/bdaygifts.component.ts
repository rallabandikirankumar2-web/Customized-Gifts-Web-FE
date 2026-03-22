import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bdaygifts',
  templateUrl: './bdaygifts.component.html',
  styleUrls: ['./bdaygifts.component.css']
})
export class BdaygiftsComponent implements OnInit {

  products: any;
  cartProducts: any;
  loginStatus: any;


constructor( private userService : UserService, private router:Router){

  

  this.cartProducts = [];

  this.products = [
    {id:1001, name:"Hoop Frame",price:799.00,  imgsrc:"assets/Images/n11.jpeg"},
    {id:1002, name:"Birthday Hamper", price:1499.00,  imgsrc:"assets/Images/n23.jpeg"},
    {id:1003, name:"Chocolate Box",  price:999.00,  imgsrc:"assets/Images/b1.jpeg"},
    {id:1004, name:"Shadow box ",  price:899.00,  imgsrc:"assets/Images/b2.jpg"},
    {id:1005, name:"Wooden Frame", price:799.00, imgsrc:"assets/Images/b3.jpg"},
    {id:1006, name:"Wooden Frame",    price:799.00,  imgsrc:"assets/Images/b4.jpg"},
    {id:1007, name:"Birthday frame", price:699.00, imgsrc:"assets/Images/b5.jpg"},
    {id:1008, name:"Acrylic Frame", price:799.00, imgsrc:"assets/Images/b6.jpg"},
    {id:1009, name:"Wooden Frame", price:799.00, imgsrc:"assets/Images/b7.jpg"},
    {id:1010, name:"Scrap book", price:1699.00, imgsrc:"assets/Images/b8.jpg"},
    {id:1011, name:"Photo Album", price:599.00, imgsrc:"assets/Images/b9.jpg"},
    {id:1012, name:"Shadow Box", price:1199.00, imgsrc:"assets/Images/b10.jpg"},
    {id:1013, name:"Printed Mug", price:399.00, imgsrc:"assets/Images/b11.jpg"},
    {id:1014, name:"Birthday Cusion", price:499.00, imgsrc:"assets/Images/b12.png"},
    {id:1015, name:"Wooden Card", price:599.00, imgsrc:"assets/Images/b13.jpg"},
    {id:1016, name:"Wooden Carving", price:299.00, imgsrc:"assets/Images/b14.jpg"},
    {id:1017, name:"cusion", price:499.00, imgsrc:"assets/Images/b15.jpg"},
    {id:1018, name:"Chocolate bouqet", price:999.00, imgsrc:"assets/Images/b16.jpg"},
    {id:1019, name:"Chocolate Box", price:799.00, imgsrc:"assets/Images/b17.jpg"},
    {id:1020, name:"Wooden Hang", price:899.00, imgsrc:"assets/Images/b18.jpg"},
    {id:1021, name:"Wall Frame", price:699.00, imgsrc:"assets/Images/b19.jpg"},
    {id:1022, name:"Birthday Frame", price:699.00, imgsrc:"assets/Images/b20.jpeg"},
    {id:1023, name:"Bluetooth", price:599.00, imgsrc:"assets/Images/b21.jpeg"},
    {id:1024, name:"Bluetooth", price:599.00, imgsrc:"assets/Images/b22.jpeg"},
    {id:1025, name:"Photo Collection Frame", price:899.00, imgsrc:"assets/Images/b23.jpeg"},
    {id:1026, name:"First Birthday", price:799.00, imgsrc:"assets/Images/b24.jpeg"},
    {id:1027, name:"Pencil Carving", price:1199.00, imgsrc:"assets/Images/b25.jpeg"},
    {id:1028, name:"Oil Painting", price:1499.00, imgsrc:"assets/Images/b27.jpeg"},
    {id:1029, name:"Hoop Frame", price:1199.00, imgsrc:"assets/Images/n11.jpeg"},
    {id:1030, name:"Baby Birth Frame", price:799.00, imgsrc:"assets/Images/b29.jpeg"}

  ];


  
  this.products.forEach((a:any) => {
    Object.assign(a,{quantity:1,total:a.price});
    
  });

  // this.userService.getUserLoggedStatus();

  
}
  ngOnInit() {

    this.userService.getLoginStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
   
  }

 
  addToCart(product:any){
    // this.userService.addToCart(product);

   if(this.loginStatus=="false"){
    this.userService.addToCart(product);
   
   }else{
    this.router.navigate(['login']);
   }


  }
  

 


}
