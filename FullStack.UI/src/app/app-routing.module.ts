import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { ViewListComponent } from './components/users/view-list/view-list.component';
import { ViewDeptListComponent } from './components/department/view-dept-list/view-dept-list.component';

const routes: Routes = [
  {
    path: '',
    component:UsersListComponent
  },
  {
    path: 'users',
    component:UsersListComponent
  },
  {
    path: 'users/add',
    component:AddUserComponent
  },
  {
    path: 'users/edit/:id',
    component:EditUserComponent
  },
  {
    path: 'users/view/:id',
    component:ViewListComponent
  },
  {
    path: 'department',
    component:DepartmentListComponent
  },
  {
    path: 'department/add',
    component:AddDepartmentComponent
  },
  {
    path: 'department/edit/:id',
    component:EditDepartmentComponent
  },
  {
    path: 'department/view/:id',
    component:ViewDeptListComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
