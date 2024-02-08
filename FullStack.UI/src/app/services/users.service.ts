import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
import { users } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { department } from '../models/department.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

//  url= "https://localhost:7001/users";
  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllusers():Observable<users[]>{
    return this.http.get<users[]>(this.baseApiUrl + '/users');
  }
  addUser(addUserRequest: users):Observable<users>{
    // addUserRequest.id=0;
    return this.http.post<users>(this.baseApiUrl + '/users',addUserRequest);
  }
  getUser(id:number):Observable<users>{
    return this.http.get<users>(this.baseApiUrl + '/users/' + id);
  }
  getUserView(id:number):Observable<users>{
    return this.http.get<users>(this.baseApiUrl + '/users/Getusersview/' + id);
  }
  
  updateUser(id:string,updateUserRequest:users):Observable<users>{
    return this.http.put<users>(this.baseApiUrl + '/users' ,updateUserRequest);
  }
  deleteUser(id:string): Observable<users>{
    return this.http.delete<users>(this.baseApiUrl + '/users/' +id);
  }
  getDepDropDownValues():Observable<any>{
    return this.http.get<department[]>(this.baseApiUrl + '/department');
  }
}
