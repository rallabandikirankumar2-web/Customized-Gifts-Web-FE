import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

declare var jQuery: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

 user : any;
 editObject : any;
 

  constructor( private service : UserService,private toastr: ToastrService){

  const user_Id = this.service.getUserId();

  this.service.getUserById(user_Id).subscribe((data: any)=>{
    console.log(data);
    this.user = data;
  })

    this.editObject = {user_Id:"",firstName:"",lastName:"",mobileNumber:"",gender:"",dob:"",address:"",emailId:"",password:""};
  }

  
  showEditPopup(user: any) {
    this.editObject = user;
    jQuery('#userModel').modal('show');
  }

  updateUser() {
    this.service.updateUser(this.editObject).subscribe();
    console.log(this.editObject);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Updated Successfully',
      showConfirmButton: false,
      timer: 1500
    });
  }

  

}
