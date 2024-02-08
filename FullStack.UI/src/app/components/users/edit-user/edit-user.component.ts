import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  addUserRequest:users = {
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
  constructor(private route:ActivatedRoute,
              private usersService: UsersService,
              private router: Router){ }
              public listItems: Array<string>=[
              ];
  ngOnInit(): void {
    this.dropdownRefresh();
    this.route.paramMap.subscribe({
      next: (params) =>{
        const idString = params.get('id');
        if(idString!=null)
        {
        const id = parseInt(idString);
        if(id){
          this.usersService.getUser(id)
          .subscribe({
            next: (response) => {
              this.usersDetails = response;
            }
          })
        }
        }
      
      }
    })
  }
  updateUser() {
    if(this.usersDetails.username=='')
    {
this.message='User Name is Required';
    }
    else if(this.usersDetails.useremail=='')
    {
      this.message='user email is Required';
    }
    else if(this.usersDetails.gender=='')
    {
      this.message='Gender is Required';
    }
    else if(this.usersDetails.departmentid==0)
    {
      this.message='department is Required';
    }
    else{
    this.usersService.updateUser(this.usersDetails.id,this.usersDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    });
  }
}

  deleteUser(id:string){
    
      this.router.navigate(['users']);
    
  }
  dropdownRefresh(){
    this.usersService.getDepDropDownValues().subscribe(data=>{
      console.log(data);
      this.deptDetails=data;
      data.forEach((element: { [x: string]: string; }) => {
        this.listItems.push(element["departmentname"]);
      });
      })
    };

}
