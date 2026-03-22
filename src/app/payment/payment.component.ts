import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {

  users : any;
  finalAmount : any;


  constructor( private service : UserService, private router: Router){

  const user_Id = this.service.getUserId();


  this.service.getUserById(user_Id).subscribe((data: any)=>{
    console.log(data);
    this.users = data;
  })

  }

  ngOnInit(): void {
    this.finalAmount = this.service.getTotalPrice();
  }
  
  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Garden of Gifts.",
    "description": "Test Transaction",
    "image": "/assets/PPLogoWhiteStacked.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // "callback_url": "https://goodluckhours.com/payment-successful/",
    "notes": {
        "address": "Gachibowli, Hyderabad, Telangana 500032."
    },
    "theme": {
        "color": "#3399cc"
    }
};

rzp1:any;
pay(total:any){
  this.options.amount=total;
  this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
  this.rzp1.open(); 
  this.router.navigate(['finalpage']);
    
}

// price : any ;

 

 
//   constructor(private router : Router,private service:UserService) {
//     this.price=service.getTotalPrice();
   

    

//   }
//   pay(){

  
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'Payment Successfull !!!',
//       showConfirmButton: false,
//       timer: 1500
//     });    this.router.navigate(['finalpage'])

//     // this.service.getUserById(empForm.user_Id).subscribe((empData: any) => {
//     //   this.emp = empData;
//     //   console.log(empData);
//     // });
    
//       }



}
