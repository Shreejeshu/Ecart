import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})



export class AddComponent implements OnInit {
 


constructor(private fb:FormBuilder,private router:Router,private ps:ProductService){}


ngOnInit(): void {
    
}

  addForm=this.fb.group({
    pid:[''],
    pname:[''],
    catId:[''],
    desc:[''],
    price:[ ],
    is_avail:[''],
    prodImg:[''],
    rating:[''],
    review:[''],
    vendorName:[''],
    Warranty:[ ]

  })

add()
{
  var path=this.addForm.value
var proData=  {
    id:path.pid,
    productName:path.pname,
    categoryId:path.catId,
    description:path.desc,
    price: path.price,
    is_available:path.is_avail,
    productImg:path.prodImg,
    rating:path.rating,
    review:path.review,
    vendor_name:path.vendorName,
    warranty:path.Warranty

  }

  this.ps.addproduct(proData).subscribe((result:any)=>{
    alert("product added")
    this.router.navigateByUrl("")
  })
}
}



