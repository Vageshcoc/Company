import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { department } from 'src/app/models/department.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserRequest: users={
    id: '0',
    username: '',
    useremail: '',
    gender: '',
    departmentid: 0
  };
  usersDetails: users = {
    id: '',
    username: '',
    useremail: '',
    gender: '',
    departmentid: 0   
  };
  message:any;
  deptDetails:any;
  constructor(private userService: UsersService,
              private router: Router){ }
              public listItems: Array<string>=[
              ];
  ngOnInit(): void {
    this.dropdownRefresh();
  }

  addUser(){
    if(this.addUserRequest.username=='')
    {
this.message='User Name is Required';
    }
    else if(this.addUserRequest.useremail=='')
    {
      this.message='user email is Required';
    }
    else if(this.addUserRequest.gender=='')
    {
      this.message='Gender is Required';
    }
    else if(this.addUserRequest.departmentid==0)
    {
      this.message='department is Required';
    }
    else{

    
    this.userService.addUser(this.addUserRequest)
    .subscribe({
      next: (users)=>{
        this.router.navigate(['users']);
        
      }
    });
  }
    
  }
  deleteUser(id:string){
    
    this.router.navigate(['users']);
  
}
dropdownRefresh(){
  this.userService.getDepDropDownValues().subscribe(data=>{
    console.log(data);
    this.deptDetails=data;
    data.forEach((element: { [x: string]: string; }) => {
      this.listItems.push(element["departmentname"]);
    });
    })
  };
  


}
