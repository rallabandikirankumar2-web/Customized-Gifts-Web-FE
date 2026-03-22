import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // public products:any = [];
  public grandTotal !:number;
  products: any=[];
  // total:any;

  
constructor( private userservice:UserService){
  this. products = this.userservice.cartItems;  

}
  ngOnInit(): void {

    this.userservice.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal = this.userservice.getTotalPrice();
    })
  
  
    // this.total=this.userservice.TotalBillAmount();;


  }

  removeItem(item : any){
    this.userservice.removeCartItem(item);
  }
emptycart(){
  this.userservice.removeAllCart();
}


}
