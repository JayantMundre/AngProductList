import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:HttpService, private router:Router) { }
  regData:any[]=[];
  isHidden:boolean=true;
  id:any='';
  pname:string='';
  price:string='';
  status:any='';
  ngOnInit(): void {
    this.getDataReg();
  //  this.getDataMoreThan50000();
  }
  onSend(id1:any,name1:any,pricr1:any,status1:any){
    let obj={
      id:id1,
      pname:name1,
      price:pricr1,
      status:status1,
    
    }
    this.router.navigate(['/create']);
    this.service.postData(obj)
    .subscribe((response:any)=>{
     // console.log(response)
    
     this.regData=response;
   
    })
 }
 onEdit(item:any){
    this.id=item.id;
    this.pname=item.pname;
    this.price=item.price;
    this.status=item.status;
  this.isHidden=false;
 }
 onUpdate(){
   let obj={
     id:this.id,
     pname:this.pname,
     price:this.price,
     status:this.status
 
   } 
   this.router.navigate(['/update']);
   this.service.updateData(obj)
   .subscribe((response:any)=>{
    //console.log(response)
    this.regData=response;
   })
 }
 onlogin(){
  //  this.router.navigate(['/login']);
 }

 onDelete(id:any){
  this.router.navigate(['/delete']);
   this.service.DeleteData(id)
   .subscribe((response:any)=>{
     //console.log(response)
    this.regData=response;
    })
 }
 getDataReg(){

  this.service.recordReg()
  .subscribe((response:any)=>{
   console.log(response)
   this.regData=response;
  })
}
getDataMoreThan50000(){
  this.service.recordHighCost()
  .subscribe((response:any)=>{
    // console.log(response)
     this.regData=response;
    })
}

getDataLessThan50000(){
  this.service.recordLowCost()
  .subscribe((response:any)=>{
    // console.log(response)
     this.regData=response;
    })
}
}

