import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { users } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  usersDetails: users = {
    id: '',
    username: '',
    useremail: '',
    gender: '',
    departmentid: 0   
  };
  

    constructor(private route:ActivatedRoute,
      private usersService: UsersService,
      private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const idString = params.get('id');
        if(idString!=null)
        {
        const id = parseInt(idString);
        if(id){
          this.usersService.getUserView(id)
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
      deleteUser(id:string){
    
        this.router.navigate(['users']);
      
    }

}
