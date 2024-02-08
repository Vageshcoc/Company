import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  dept:department[]=[ ];
  deptDetails:department={
    id:'',
    departmentname:''
  }
  constructor(private departmentService: DepartmentService
    , private router: Router){ }

  ngOnInit(): void {
    this.departmentService.getAllDepartment()
    .subscribe({
      next: (dept) => {
        this.dept = dept;
      },
      error: (response) =>{
        console.log(response);
      }
    })

   

     }
     updateDepartment() {
      this.departmentService.updateDepartment(this.deptDetails.id,this.deptDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['department']);
        }
      });
    }
    deleteDepartment(id:string){
      this.departmentService.deleteDepartment(id)
      .subscribe({
        next: (response) =>{
          this.departmentService.getAllDepartment()
          .subscribe({
            next: (dept)=>{
            this.dept = dept;
          },
          error: (response)=>{
          console.log(response);
        }
      
          })
        }
      });
    }

}
