import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
  productArray: any = [];
  catgoryArray: any = [];
  searchString: any = ""
  constructor(private ps: ProductService) { }
  ngOnInit(): void {

    this.ps.getAllproduct().subscribe((result: any) => {
      this.productArray = result
      console.log(this.productArray);


      this.catgoryArray = this.productArray
      this.ps.search.subscribe((value: any)=>{
        this.searchString=value
      })

    })
  }
  categoryProduct(catId: any) {
    this.catgoryArray = this.productArray.filter((item: any) =>
      item.categoryId == catId || catId == "")
    console.log(this.catgoryArray);

  }

}
