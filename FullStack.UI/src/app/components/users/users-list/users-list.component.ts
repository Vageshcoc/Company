import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
 
  useres: users [] = [];
  usersDetails: users = {
    id: '',
    username: '',
    useremail: '',
    gender: '',
    departmentid: 0    
  };
 
  constructor(private usersService: UsersService,
    private router: Router){}

  ngOnInit(): void {
    this.usersService.getAllusers()
    .subscribe({
      next: (useres)=>{
      this.useres = useres;
    },
    error: (response)=>{
    console.log(response);
  }

    })


   }
   updateUser() {
    this.usersService.updateUser(this.usersDetails.id,this.usersDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    });
  }
   deleteUser(id:string){
    this.usersService.deleteUser(id)
    .subscribe({
      next: (response) =>{
        this.usersService.getAllusers()
        .subscribe({
          next: (useres)=>{
          this.useres = useres;
        },
        error: (response)=>{
        console.log(response);
      }
    
        })
      }
    });
  }
  }
