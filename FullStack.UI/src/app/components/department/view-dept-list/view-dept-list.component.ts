import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-view-dept-list',
  templateUrl: './view-dept-list.component.html',
  styleUrls: ['./view-dept-list.component.css']
})
export class ViewDeptListComponent implements OnInit {
  dept:department[]=[ ];
  departmentDetails:department={
    id:'',
    departmentname:''
  };
  constructor(private route:ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router){}

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
       deleteDepartment(id:string){
    
        this.router.navigate(['department']);
      
    }


}
