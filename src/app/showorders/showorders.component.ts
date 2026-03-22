import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showorders',
  templateUrl: './showorders.component.html',
  styleUrls: ['./showorders.component.css']
})
export class ShowordersComponent implements OnInit{

  User_Id:any;
  products: any=[];
  // total:any;

  
constructor( private userservice:UserService, private router:Router ){
  this. products = this.userservice.cartItems;  

}
  ngOnInit(): void {

    this.userservice.getProducts().subscribe(res=>{
      this.products=res;
      this.User_Id = this.userservice.getUserId();

    })
  
  
    // this.total=this.userservice.TotalBillAmount();;


  }
  back(){
    this.router.navigate(['adminpage']);

  }

  


}

