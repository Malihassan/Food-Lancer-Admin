import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategories(){
    return this.http.get(`/admin/category/all`)
  }
  getCategoryById(id:string){
    return this.http.get(`/admin/category/${id}`)
  }
  addCategory(name:string){
    return this.http.post(`/admin/category`,{name})
  }
}
