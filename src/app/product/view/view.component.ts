import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {
  pid:any
  pdata:any
constructor(private ps:ProductService,private ar:ActivatedRoute,private router:Router){}

ngOnInit(): void{
this.ar.params.subscribe((data:any)=>{
  // console.log(data);
  this.pid=data.id
  console.log(this.pid);
  

})

this.ps.getproduct(this.pid).subscribe((result:any)=>{
  this.pdata=result
  
  
})
}
deleteProduct(){
  this.ps.deleteProduct(this.pid).subscribe((result:any)=>{
    alert("product deleted")
    this.router.navigateByUrl("")
  })
}


}
