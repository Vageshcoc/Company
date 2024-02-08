import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  departmentDetails : department={
    id: '',
    departmentname: ''
  };
message:any;
  constructor(private route: ActivatedRoute,
              private departmentService: DepartmentService,
              private router: Router){ }
              
  ngOnInit(): void {
   
    this.route.paramMap.subscribe({
      next: (params) => {
       const id = params.get('id');

       if(id){
        this.departmentService.getDepartment(id)
        .subscribe({
          next: (response) => {
            this.departmentDetails = response;

          }
        })
       }
      }
    })
   
  }
  updateDepartment () {
    if(this.departmentDetails.departmentname=='')
    {
this.message='Department Name is Required';
    }
    else {
    this.departmentService.updateDepartment(this.departmentDetails.id,this.departmentDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['department']);
      }
    })
  }
}
  deleteDepartment (id:string){
   
        this.router.navigate(['department']);
      }
      

  

}
