import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, retry } from 'rxjs';
import{ HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

function _window():any{
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  isUserLogged: boolean;
  loginStatus: Subject<any>;
  private user_Id : any;
  


  // public cartItemList : any =[]
  // public productList=new BehaviorSubject<any>([]);

  cartItems: any=[];
  productToBeAdded= new BehaviorSubject<any>([]);

 
 


  //Implementing Dependency Injection for HttpClient using Constructor
  constructor(private http: HttpClient, private router:Router , private toastr: ToastrService) { 
    this.isUserLogged = false;
    this.loginStatus = new Subject();
    // this.cartItems = [];
    // this.productToBeAdded = new Subject();
    
  }
  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }
  //LoginSuccess
  setUserLoggedIn() {
    this.isUserLogged = true;
    this.loginStatus.next(true);
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLogged;
  }

  setUserLogout() {
    this.isUserLogged = false;
    this.loginStatus.next(false);
  }

// ==============================================================================================================




  registerUser(user: any){
    
    return this.http.post('/registerUser', user)
  }

  getuser(loginForm: any): any{
    return this.http.get('/login/'+loginForm.emailId + "/" + loginForm.password).toPromise();
  }
  setUserId(user_Id : any){
    this.user_Id = user_Id;
  }
  getUserId(){
    return this.user_Id;
  }
  getAllUsers(){ //Observables
    return this.http.get('getAllUsers');
  }
  
  


// >.........................................................................

getProducts(){
  return this.productToBeAdded.asObservable();
}

setProducts(product: any){
  this.cartItems.push(...product);
  this.productToBeAdded.next(product);
}

// addToCart(product:any){
// this.cartItemList.push(product);
// this.productList.next(this.cartItemList);
// this.getTotalPrice();
// console.log(this.cartItemList);
// }

addToCart(product: any) {
  this.cartItems.push(product);
  // this.productToBeAdded.next(product);
  console.log(product);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Item Added To Cart',
    showConfirmButton: false,
    timer: 1500
  });
  this.productToBeAdded.next(this.cartItems);
this.getTotalPrice();
}

setOrderitems(Order:any){
  this.cartItems.push(...Order);
  this.productToBeAdded.next(Order);

}
getOrderitems(){
  return this.productToBeAdded.asObservable();
}

getProductStatus(): any {
  return this.productToBeAdded.asObservable();
}

getTotalPrice() : number{
  let grandTotal=0;
  this.cartItems.map((a:any)=>{
    grandTotal+=a.total;
  })

  return grandTotal;


}
removeCartItem(product:any){
this.cartItems.map((a:any,index:any)=>{
  if(product.id=a.id){
    this.cartItems.splice(index,1);
  }
})
this.productToBeAdded.next(this.cartItems);

}

removeAllCart(){
  this.cartItems=[];
  this.productToBeAdded.next(this.cartItems);
  // return this.cartItems;

}

getUserById(user_Id: any): any {
  return this.http.get('/getUserById/' + user_Id);
}
updateUser(user: any): any {
  return this.http.put('/updateUser', user);
}


TotalBillAmount(): number {
  let total = 0;
  for (const item of this.cartItems) {
    total += item.quantity * item.product.price;
  }
  return total;
}

get nativeWindow() : any{
  return _window();
}




}
