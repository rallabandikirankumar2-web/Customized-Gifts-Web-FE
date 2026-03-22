import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { EncryptService } from '../encrypt.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  
  
//   user: any;
  
//   constructor(private service: UserService,private router: Router) {

//     this.user = {emailId:'', password:'', firstName:'', lastName:'', mobileNumber:'', gender:'', dob:'', address:''};

//   }
 
  
//   ngOnInit(){
    
//   }

//  userRegistration(regFrom: any) {
//     console.log(regFrom);

//     this.user.emailId = regFrom.emailId;
//     this.user.password = regFrom.password;
//     this.user.firstName = regFrom.firstName;
//     this.user.lastName = regFrom.lastName;
//     this.user.mobileNumber = regFrom.mobileNumber;
//     this.user.gender = regFrom.gender;
//     this.user.dob = regFrom.dob;
//     this.user.address = regFrom.address;
    
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'Registration Successfully Completed',
//       showConfirmButton: false,
//       timer: 3500
//     });


//     this.service.registerUser(this.user).subscribe((data: any) => {
//       console.log(data);
//       this.router.navigate(['login']);
//     });
//   }
  


// }

user : any;
count : any;
  userdata : any;

  constructor(private service : UserService, private EncrDecr : EncryptService, private route : Router,private toastr:ToastrService){
    this.user =  {emailId:'', password:'', firstName:'', lastName:'', mobileNumber:'', gender:'', dob:'', address:''};
  }


  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data: any) => {
      this.userdata = data;
    });
  }


  userRegistration(user: any) {
    this.user = user;
    console.log(user);
    for (let i of this.userdata) {
      this.count = 0;
      if (user.emailId == i.emailId) {
        // alert("Already Registered");
        // this.toastr.warning("Already");
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Already Registered',
          showConfirmButton: false,
          timer: 3500
        });
        this.route.navigate(['login']);
        this.count = this.count + 1;
        break;
      }
    }
      if (this.count == 0) {
        var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', user.password);
        user.password=encrypted;
        console.log(user);
        this.service.registerUser(user).subscribe();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registration Successfully Completed',
            showConfirmButton: false,
            timer: 3500
          });
          this.route.navigate(['home']);
      }
    //  this.route.navigate(['login']);
  }


}



