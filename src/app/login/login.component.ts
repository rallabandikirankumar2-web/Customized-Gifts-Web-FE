import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { EncryptService } from '../encrypt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 
  // user: any;
 
  //   constructor(private router: Router, private service: UserService,private toastr: ToastrService) {
  // }

  // ngOnInit(){
  // }

  // async login(loginForm: any) {
  //   console.log(loginForm);   

  //   if (loginForm.emailId === 'HR' && loginForm.password === 'HR') {
      
     
  //     this.service.setUserLoggedIn();
  //     this.router.navigate(['forher']);

  //   } else {

  //       await this.service.getuser(loginForm).then((userData: any) => {
  //         this.user = userData;
  //         console.log(userData);
  //         const user_Id = userData.userId
  //         console.log(user_Id)
  //         this.service.setUserId(user_Id);
  //       });

  //       if (this.user != null) {
  //         this.service.setUserLoggedIn();
         
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: 'Login Successfull',
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.router.navigate(['home']);
        
        
         
         
  //       } else {
          
  //         this.router.navigate(['login']);
  //       }   
  //   }
  // }

 
  // }

  users : any;
  emailTest: boolean=false;

  constructor( private service : UserService, private router: Router, private EncrDecr : EncryptService){
    this.service.getAllUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data);
      
    });
  }
  ngOnInit(): void {
  }

  login(loginForm:any){
    this.users.forEach((user:any) => {
      if(loginForm.emailId == user.emailId && loginForm.password == this.EncrDecr.get('123456$#@$^@1ERF', user.password)){
        this.service.setUserLoggedIn();
        const user_Id = user.userId
        console.log(user_Id)
        this.service.setUserId(user_Id);
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfull',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['home']);
     

      }else{
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'INvalid Credentials',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['login']);
      }
    });

  }
}