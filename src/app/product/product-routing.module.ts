import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ViewallComponent } from './viewall/viewall.component';




const routes: Routes = [ { path: '', component: ViewallComponent }, ];
  
  @NgModule({

imports:[RouterModule.forChild(routes)],
exports:[RouterModule]

  })
  export class ProductRoutingModule{ }