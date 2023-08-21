import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //create an object for behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  getAllproduct()
  {
    return this.http.get('http://localhost:3000/products')
  }
//apito get single product
  getproduct(pid:any)
  {

    return this.http.get('http://localhost:3000/products/'+pid)
  }

  //add product api
  addproduct(productObject:any)
  {
    return this.http.post('http://localhost:3000/products',productObject)
  }

  deleteProduct(pid:any)
  {
    return this.http.delete('http://localhost:3000/products/'+pid)
  }

  updateproduct(pid:any,productObject:any)
  {
return this.http.put('http://localhost:3000/products/'+pid,productObject)
  }
}
