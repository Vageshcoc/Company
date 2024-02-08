import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { ViewListComponent } from './components/users/view-list/view-list.component';
import { ViewDeptListComponent } from './components/department/view-dept-list/view-dept-list.component';
//import { EnvironmentComponent } from './environment/environment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    ViewListComponent,
    ViewDeptListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
