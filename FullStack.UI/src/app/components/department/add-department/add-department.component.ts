import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  addDepartmentRequest: department = {
    id: '0',
    departmentname: ''
  };
  departmentDetails:department={
    id:'',
    departmentname:''
  };
  message:any;
  constructor(private departmentService:DepartmentService,
              private router: Router){ }
  ngOnInit(): void {
  }
  addDepartment(){
    if(this.addDepartmentRequest.departmentname=='')
    {
this.message='Department Name is Required';
    }
    else {
    this.departmentService.addDepartment(this.addDepartmentRequest)
    .subscribe({
      next: (department) => {
          this.router.navigate(['department']);
      }
    });
     }
    }
     deleteDepartment(id:string){
    
      this.router.navigate(['department']);
    
  }
}
