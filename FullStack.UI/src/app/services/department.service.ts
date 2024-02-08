import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllDepartment():Observable<department[]>{
    return this.http.get<department[]>(this.baseApiUrl + '/department');

  }
  addDepartment(addDepartmentRequest:department):Observable<department> {
    return this.http.post<department>(this.baseApiUrl + '/department',addDepartmentRequest)
  }
  getDepartment(id:string):Observable<department>{
    return this.http.get<department>(this.baseApiUrl + '/department/' + id)
  }
  updateDepartment(id:string,updateDepartmentRequest:department):Observable<department>{
    return this.http.put<department>(this.baseApiUrl + '/department' ,updateDepartmentRequest)
  }
  deleteDepartment(id:string):Observable<department>{
    return this.http.delete<department>(this.baseApiUrl + '/department/' +id);
  }
}
