import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string='http://localhost:8092/';
  constructor(private http:HttpClient) { }
  postData(obj:any){
    return (this.http.post(`${this.baseUrl}add-prod`,obj));
 }
     
 updateData(obj:any){
   return (this.http.put(`${this.baseUrl}update-product`,obj));
}

DeleteData(id:any){
 return (this.http.delete(`${this.baseUrl}delete-product/${id}`));
}
recordReg(){
  return (this.http.get(`${this.baseUrl}getAll`));
 
}
recordHighCost(){
  return (this.http.get(`${this.baseUrl}getpriceMorethan50000`));
}
recordLowCost(){
  return (this.http.get(`${this.baseUrl}getpriceLessThan50000`));
}
}