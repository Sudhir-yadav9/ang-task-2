import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'reactiveform', loadChildren: () => import('./reactiveform/reactiveform.module').then(m => m.ReactiveformModule) }, { path: 'templateform', loadChildren: () => import('./templateform/templateform.module').then(m => m.TemplateformModule) }, { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
