import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }
@Input() id!:number;
@Input() pname!:number;
@Input() price!:number;
  ngOnInit(): void {
  }
btnClick(){
  this.snack.open('hey wellcome in this app','cancel');
}
}
