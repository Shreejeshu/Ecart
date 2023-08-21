import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPipe } from './product pipe/product.pipe';


const routes: Routes = [
  {path: '', component: ViewallComponent},
  {path:'add',component: AddComponent },
  {path:'delete/:id',component:DeleteComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:ViewComponent}
];

@NgModule({
  declarations: [
    ProductComponent,
    ViewallComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ProductPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
